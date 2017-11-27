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

  askAbsence(matricule:string, absence:Absence){
    // TODO sauvegarder le nouveau collègue
    console.log(absence);
    
   this.http.post<Absence>(`${url_server}/users/${matricule}/absences`,absence,httpOptions).subscribe()
   console.log(`${url_server}/users/${matricule}/absences`)

  }
}
