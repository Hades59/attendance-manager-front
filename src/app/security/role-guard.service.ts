import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data.expectedRole
    const token = this.auth.getToken()
    const tokenPayload = decode(token)

    if (this.auth.isAuthenticated()) {
      return expectedRole.some(el => el == tokenPayload.role)
    } else {
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url }})
      return false
    }
  }
}
