import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Absence } from './shared/domain/absence'
import { AbsenceService } from './shared/service/absence.service';
import { AppComponent } from './app.component';
import { AbsenceVisuComponent } from './absences/absence-visu/absence-visu.component';
import { NavManagerComponent } from './nav-manager/nav-manager.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from './shared/pipes/date.pipe';

=======

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { RouterModule, Routes } from '@angular/router';
import { NavManagerComponent } from './nav-manager/nav-manager.component';
import { ValidationDemandesComponent } from './validation-demandes/validation-demandes.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AbsenceRequestComponent } from './absences/absence-request/absence-request.component'
import { AbsenceService } from './domain/service/absence-service.service'
>>>>>>> a58557bdfa8805fdd3fd589ae9c01441361b5286

const appRoutes: Routes = [
  { path: 'validDmdes', component: ValidationDemandesComponent }, // /page1 affiche le composant A
  { path: 'accueil', component: AccueilComponent },
  { path: 'gestionAbs', component: AbsenceRequestComponent},
  { path: '**', redirectTo: 'acceuil'} // redirige vers la route page1 par défaut
];

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AbsenceVisuComponent,
    NavManagerComponent,
    DatePipe
=======
    AbsenceRequestComponent,
    NavManagerComponent,
    ValidationDemandesComponent,
    AccueilComponent,
    AbsenceRequestComponent
>>>>>>> a58557bdfa8805fdd3fd589ae9c01441361b5286
  ],

  imports: [
    BrowserModule,
    NgbModule.forRoot(),
<<<<<<< HEAD
    HttpClientModule
    

=======
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
>>>>>>> a58557bdfa8805fdd3fd589ae9c01441361b5286
  ],
  providers: [AbsenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
