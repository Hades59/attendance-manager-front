import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Ferie } from '../domain/feries';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
}

@Injectable()
export class FeriesService {

  feries: Ferie[] = []
  ferieSubject: BehaviorSubject<Ferie[]> = new BehaviorSubject([])
  
  constructor(private http: HttpClient) { }

  listerFeries():Observable<Ferie[]>{
    this.http.get<Ferie[]>(`${environment.apiUrl}/feries`, httpOptions)
    .subscribe(data => {
      this.feries = data
      this.ferieSubject.next(this.feries)
    } )

    return this.ferieSubject;
  }

  ferieDelete( jf: Ferie): Observable<Ferie[]> {
    console.log("avant : "+this.feries.length);
    
    this.http.delete<Ferie>(`${environment.apiUrl}/ferie/${jf.id}`, httpOptions).subscribe()
    this.feries = this.feries.filter(fer => fer != jf);
    this.ferieSubject.next(this.feries)
    console.log(" Après :"+this.feries.length);
    
    return this.ferieSubject

  }
}
