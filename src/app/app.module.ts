import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestOptions } from '@angular/http';

import { TokenInterceptor } from './security/token-interceptor';
import { JwtInterceptor } from './security/jwt-interceptor'
import { RoleGuardService as AuthGuard } from './security/role-guard.service';
import { AuthService } from './security/auth.service'

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';

import { Absence } from './shared/domain/absence'
import { AppComponent } from './app.component';
import { AbsenceVisuComponent } from './absences/absence-visu/absence-visu.component';
import { NavManagerComponent } from './nav-manager/nav-manager.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from './shared/pipes/date.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ValidationDemandesComponent } from './validation-demandes/validation-demandes.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AbsenceRequestComponent } from './absences/absence-request/absence-request.component'
import { PlanningAbsComponent } from './planning-abs/planning-abs.component'
import { AbsenceDeleteComponent } from './absences/absence-delete/absence-delete.component';
import { AbsenceUpdateComponent } from './absences/absence-update/absence-update.component';
import { AbsenceVisualizeComponent } from './absences/absence-visualize/absence-visualize.component';
import { AbsenceService } from './shared/service/absence.service';
import { TypeCongePipe } from './shared/pipes/type-conge.pipe';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'validDmdes', component: ValidationDemandesComponent,
    canActivate: [AuthGuard], data: { expectedRole: ['ROLE_MANAGER'] }
  },
  { path: 'planningAbs', component: PlanningAbsComponent,
   canActivate: [AuthGuard], data: { expectedRole: ['ROLE_EMPLOYE'] }
  },
  { path: 'gestionAbs', component: AbsenceVisuComponent,
   canActivate: [AuthGuard], data: { expectedRole: ['ROLE_EMPLOYE'] }
  },
  { path: 'request', component: AbsenceRequestComponent,
   canActivate: [AuthGuard], data: { expectedRole: ['ROLE_EMPLOYE'] }
  },
  { path: '**', redirectTo: 'accueil'}
];

@NgModule({
  declarations: [
    AppComponent,
    AbsenceVisuComponent,
    NavManagerComponent,
    DatePipe,
    AbsenceRequestComponent,
    NavManagerComponent,
    ValidationDemandesComponent,
    AccueilComponent,
    AbsenceRequestComponent,
    PlanningAbsComponent,
    DatePipe,
    AbsenceDeleteComponent,
    AbsenceUpdateComponent,
    AbsenceVisualizeComponent,
    AbsenceRequestComponent,
    TypeCongePipe,
    LoginComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AbsenceService,
    NgbActiveModal,
    AuthService,
    AuthGuard,
    //{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  exports: [PlanningAbsComponent]
})
export class AppModule { }
