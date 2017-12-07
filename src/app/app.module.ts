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
import { Ferie } from './shared/domain/feries'
import { AppComponent } from './app.component';
import { AbsenceVisuComponent } from './absences/absence-visu/absence-visu.component';
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
import { FeriesService } from './shared/service/feries.service';
import { TypeCongePipe } from './shared/pipes/type-conge.pipe';
import { LoginComponent } from './login/login.component';
import { FeriesVisualisationComponent } from './feries/feries-visualisation/feries-visualisation.component';
import { VueHistogrammeComponent } from './vue-histogramme/vue-histogramme.component';
import { TabsModule, CollapseModule } from 'ngx-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { FeriesCreationComponent } from './feries/feries-creation/feries-creation.component';
import { NavComponent } from './nav/nav.component';
import { FeriesDeleteComponent } from './feries/feries-delete/feries-delete.component';
import { FeriesUpdateComponent } from './feries/feries-update/feries-update.component';


const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'planningAbs', component: PlanningAbsComponent},
  { path: 'gestionAbs', component: AbsenceVisuComponent},
  { path: 'request', component: AbsenceRequestComponent},
  { path: 'vuesSynth', component: VueHistogrammeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'validDmdes', component: ValidationDemandesComponent,
    canActivate: [AuthGuard], data: { expectedRole: ['ROLE_MANAGER'] }
  },
  { path: 'planningAbs', component: PlanningAbsComponent,
   canActivate: [AuthGuard], data: { expectedRole: ['ROLE_MANAGER', 'ROLE_EMPLOYE'] }
  },
  { path: 'gestionAbs', component: AbsenceVisuComponent,
   canActivate: [AuthGuard], data: { expectedRole: ['ROLE_MANAGER', 'ROLE_EMPLOYE'] }
  },
  { path: 'request', component: AbsenceRequestComponent,
   canActivate: [AuthGuard], data: { expectedRole: ['ROLE_MANAGER'] }
  },
  { path: 'joursFeries', component: FeriesVisualisationComponent,
   canActivate: [AuthGuard], data: { expectedRole: ['ROLE_MANAGER', 'ROLE_EMPLOYE'] }
  },
  { path: '**', redirectTo: 'accueil'}
];

@NgModule({
  declarations: [
    AppComponent,
    AbsenceVisuComponent,
    DatePipe,
    AbsenceRequestComponent,
    ValidationDemandesComponent,
    AccueilComponent,
    PlanningAbsComponent,
    AbsenceDeleteComponent,
    AbsenceUpdateComponent,
    AbsenceVisualizeComponent,
    AbsenceRequestComponent,
    TypeCongePipe,
    FeriesVisualisationComponent,
    VueHistogrammeComponent,
    LoginComponent,
    FeriesVisualisationComponent,
    FeriesCreationComponent,
    NavComponent,
    FeriesDeleteComponent,
    FeriesUpdateComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  providers: [
    AbsenceService,
    NgbActiveModal,
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    FeriesService
  ],
  bootstrap: [AppComponent],
  exports: [PlanningAbsComponent]
})
export class AppModule { }
