import { Injectable } from '@angular/core';
import { Absence } from '../domain/absence';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
const url_server = "http://localhost:8080"

@Injectable()
export class AbsenceService {

  // données en mémoire
  absenceSubject: BehaviorSubject<Absence[]> = new BehaviorSubject([])


  absences: Absence[] = []

  constructor(private http: HttpClient) {

  }

  refresh(): void {
    this.http.get<any>(`${url_server}/absences`)
      .subscribe(abs => {
        abs.forEach(e => {
          let begin = new Date(e.beginDate.substring(4, 0), e.beginDate.substring(7, 5), e.beginDate.substring(10, 8))
          let end = new Date(e.endDate.substring(4, 0), e.endDate.substring(7, 5), e.endDate.substring(10, 8))
          let motif = e.motif
          let type = e.type
          let absence = new Absence(begin, end, motif, type);
          absence.id = e.id
          absence.status = e.status

          this.absences.push(absence)
        });
        this.absenceSubject.next(this.absences)
      })

  }

  listerAbsence(): Observable<Absence[]> {
    this.refresh()
    return this.absenceSubject.asObservable()
  }

  absenceAsk(matricule:string, absence:Absence){
    // TODO sauvegarder le nouvelle demande 
    
    let data = {
              "beginDate" :absence.beginDate+"T00:00:00",
              "endDate":absence.endDate+"T00:00:00",
              "motif":absence.motif,
              "status":absence.status,
              "type":  absence.type    
              }
              console.log(data);
              
   this.http.post<Absence>(`${url_server}/users/${matricule}/absences`,data,httpOptions).subscribe()

  }

  absenceUpdate(matricule:string, absence:Absence){
    let data = {
      "id":absence.id,
      "beginDate" :absence.beginDate+"T00:00:00",
      "endDate":absence.endDate+"T00:00:00",
      "motif":absence.motif,
      "type":absence.type       
      }
      console.log(data);
      
      this.http.post<Absence>(`${url_server}/users/${matricule}/absences`,data,httpOptions).subscribe() 
  }
  
}
