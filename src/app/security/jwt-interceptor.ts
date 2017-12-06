import { Injectable } from '@angular/core'
import 'rxjs/add/operator/do';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse }
  from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private router:Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {

      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          // redirect to the login route
          this.router.navigate(['login'])
        }
      }
    });
  }
}
