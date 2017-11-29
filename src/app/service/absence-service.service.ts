import { Injectable } from '@angular/core';
import {Absence} from '../domain/absence'
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const url_server = "http://localhost:8080"
@Injectable()
export class AbsenceService {

  constructor(private http: HttpClient) { }

  absenceAsk(matricule:string, absence:Absence){
    // TODO sauvegarder le nouvelle demande 
    
    let data = {
              "beginDate" :absence.beginDate+"T00:00:00",
              "endDate":absence.endDate+"T00:00:00",
              "motif":absence.motif,
              "type":absence.type       
              }
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
