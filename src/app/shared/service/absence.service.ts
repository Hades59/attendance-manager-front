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
  

  absences: Absence[]

  constructor(private http: HttpClient) {
    
   }

  refresh(): void {
    this.http.get<Absence[]>(`http://localhost:8080/absences`)
      .subscribe(abs => this.absenceSubject.next(abs))
  }

  listerAbsence(): Observable<Absence[]> {
    this.refresh()
    return this.absenceSubject.asObservable()
  }

}
