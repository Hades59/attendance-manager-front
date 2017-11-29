import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { RouterModule, Routes } from '@angular/router';
import { NavManagerComponent } from './nav-manager/nav-manager.component';
import { ValidationDemandesComponent } from './validation-demandes/validation-demandes.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AbsenceRequestComponent } from './absences/absence-request/absence-request.component'
import { AbsenceService } from './domain/service/absence-service.service';
import { PlanningAbsComponent } from './planning-abs/planning-abs.component'

const appRoutes: Routes = [
  { path: 'validDmdes', component: ValidationDemandesComponent }, // /page1 affiche le composant A
  { path: 'accueil', component: AccueilComponent },
  { path: 'gestionAbs', component: AbsenceRequestComponent},
  { path: 'planningAbs', component: PlanningAbsComponent},
  { path: '**', redirectTo: 'acceuil'} // redirige vers la route page1 par défaut
];

@NgModule({
  declarations: [
    AppComponent,
    AbsenceRequestComponent,
    NavManagerComponent,
    ValidationDemandesComponent,
    AccueilComponent,
    AbsenceRequestComponent,
    PlanningAbsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    CalendarModule.forRoot()
  ],
  providers: [AbsenceService],
  bootstrap: [AppComponent],
  exports: [PlanningAbsComponent]
})
export class AppModule { }
