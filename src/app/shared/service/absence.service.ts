import { Injectable } from '@angular/core';
import { Absence } from '../domain/absence';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
}

@Injectable()
export class AbsenceService {

  // données en mémoire
  absenceSubject: BehaviorSubject<Absence[]> = new BehaviorSubject([])


  absences: Absence[] = []

  constructor(private http: HttpClient) {

  }

  refresh(): void {
    this.http.get<any>(`${environment.apiUrl}/absences`)
      .subscribe(abs => {
        this.absences = []
        abs.forEach(e => {
          let begin = new Date(e.beginDate.substring(4, 0), e.beginDate.substring(7, 5), e.beginDate.substring(10, 8))
          let end = new Date(e.endDate.substring(4, 0), e.endDate.substring(7, 5), e.endDate.substring(10, 8))
          let motif = e.motif
          let type = e.type
          let status = e.status
          let absence = new Absence(begin, end, motif, type, status);
          absence.id = e.id

          this.absences.push(absence)

        });

        this.absenceSubject.next(this.absences)
      })

  }

  listerAbsence(): Observable<Absence[]> {
    this.refresh()
    return this.absenceSubject.asObservable()
  }

  listerAbsenceParStatus(status: string): Observable<Absence[]> {
    return this.http.get<Absence[]>(`${environment.apiUrl}/absences?status=${status}`, httpOptions);
  }

  absenceAsk(matricule: string, absence: Absence) {
    let data = {
      "beginDate": absence.beginDate + "T00:00:00",
      "endDate": absence.endDate + "T00:00:00",
      "motif": absence.motif,
      "type": absence.type
    }
    this.http.post<number>(`${environment.apiUrl}/users/${matricule}/absences`, data, httpOptions).subscribe(id =>{
   absence.id = id
  absence.status = "INITIALE"
  this.absences.push(absence)
  this.absenceSubject.next(this.absences)
  return this.absenceSubject.asObservable()
  })
}

  absenceUpdate(matricule: string, absence: Absence) {
    let data = {
      "id": absence.id,
      "beginDate": absence.beginDate + "T00:00:00",
      "endDate": absence.endDate + "T00:00:00",
      "motif": absence.motif,
      "type": absence.type,
      "status": absence.status
    }

    this.http.post<Absence>(`${environment.apiUrl}/users/${matricule}/absences`, data, httpOptions).subscribe()
    this.refresh()

  }

  absenceDelete(matricule: string, absence: Absence): Observable<Absence[]> {
    this.http.delete<Absence>(`${environment.apiUrl}/users/${matricule}/absences/${absence.id}`, httpOptions).subscribe()
    this.absences = this.absences.filter(abs => abs != absence);
    this.absenceSubject.next(this.absences)
    return this.absenceSubject.asObservable()

  }

  validAbs(uneAbs: Absence): Observable<Absence[]> {
    uneAbs.status = "VALIDEE"
    this.http.put<Absence[]>(`${environment.apiUrl}/absences/` + `${uneAbs.id}/status`, httpOptions)
      .subscribe(col => {
        this.absenceSubject.next(this.absences)
      })
    return this.absenceSubject.asObservable()
  }

  rejectAbs(uneAbs: Absence): Observable<Absence[]> {
    uneAbs.status = "REJETEE"
    this.http.put<Absence[]>(`${environment.apiUrl}/absences/` + `${uneAbs.id}/status`, httpOptions)
      .subscribe(col => {
        this.absenceSubject.next(this.absences)
      })
    return this.absenceSubject.asObservable()
  }

  
}
