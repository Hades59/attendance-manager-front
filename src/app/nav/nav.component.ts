import { Component, OnInit } from '@angular/core';
import { AuthService } from '../security/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isCollapsed: boolean;

  constructor(public auth:AuthService, private router:Router) {
    this.isCollapsed = true
  }

  ngOnInit() {
  }

  disconnect():void {
    localStorage.removeItem('jwt_token')
    this.router.navigate(['accueil'])
  }

}
