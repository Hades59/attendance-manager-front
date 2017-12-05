import { Component, OnInit } from '@angular/core';
import { AuthService } from '../security/auth.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isCollapsed: boolean;

  constructor(public auth:AuthService) {
    this.isCollapsed = true
  }

  ngOnInit() {
  }

}
