import { Component, OnInit } from '@angular/core';
import { AuthService } from '../security/auth.service';
import { User } from '../shared/domain/user';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;

  constructor(private authService:AuthService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  authenticate(matricule, password, alert) {
    let userLogin:User = new User()
    userLogin.matricule = matricule.value
    userLogin.password = password.value
    this.authService.login(userLogin).subscribe(
      resp => {
        this.authService.setToken(resp.headers.get('Authorization').replace("Bearer ", ""))
        this.router.navigateByUrl(this.returnUrl)
      }, err => this.alertShow(alert, 'Matricule/mot de passe incorrect')
    )
  }

  private alertShow(alert,msg){
    alert.style.visibility = 'visible'
    alert.innerHTML = msg
    setTimeout(() => {alert.style.visibility = 'hidden'},8000);
  }

}
