import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

const AUTH_PREFIX = 'Bearer';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `${AUTH_PREFIX} ${localStorage.getItem('jwt_token')}`
      }
    });

    return next.handle(req);
  }

}
