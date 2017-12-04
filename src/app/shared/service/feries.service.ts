import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Ferie } from '../domain/feries';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
}

@Injectable()
export class FeriesService {

  constructor(private http: HttpClient) { }

  listerFeries():Observable<Ferie>{
    return this.http.get<Ferie[]>(`${environment.apiUrl}/feries`, httpOptions);    

  }
}
