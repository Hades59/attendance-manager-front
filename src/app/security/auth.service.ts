import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import * as jwt_decode from 'jwt-decode';

export const TOKEN_API: string = 'jwt_token';

@Injectable()
export class AuthService {

  constructor(private http:HttpClient) { }

  getToken(): string {
    return localStorage.getItem(TOKEN_API);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_API, token);
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    if(!token) return true;

    const date = this.getTokenExpirationDate(token);
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  isAuthenticated(): boolean {
    return !this.isTokenExpired()
  }

  getRole(): string {
    return jwt_decode(this.getToken()).role
  }

  login(user): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/auth`, JSON.stringify(user), {responseType: 'text', observe: 'response'})
  }

}
