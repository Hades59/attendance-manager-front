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

@Injectable()
export class AbsenceService {

  // données en mémoire
  absenceSubject: BehaviorSubject<Absence[]> = new BehaviorSubject([])
  

  absences: Absence[]=[]

  constructor(private http: HttpClient) {
    
   }

  refresh(): void {
    this.http.get<any>(`http://localhost:8080/absences`)
      .subscribe(abs => {
        abs.forEach(e => {
          let begin = new Date(e.beginDate.year,e.beginDate.monthValue, e.beginDate.dayOfMonth  )
          let end = new Date(e.endDate.year, e.endDate.monthValue, e.endDate.dayOfMonth  )
          let motif = e.motif
          let type = e.type
          let absence = new Absence(begin,end,motif,type);
          absence.id = e.id 
          absence.status = e.status 
          console.log(absence )
          
          this.absences.push(absence)
        });
        this.absenceSubject.next(this.absences)
      })
        
  }

  listerAbsence(): Observable<Absence[]> {
    this.refresh()
    return this.absenceSubject.asObservable()
  }

}
