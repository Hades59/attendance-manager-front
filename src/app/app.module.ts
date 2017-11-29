import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AbsenceRequestComponent } from './absences/absence-request/absence-request.component'
import { AbsenceService } from './service/absence-service.service'
import { HttpClientModule } from '@angular/common/http';


import { RouterModule, Routes } from '@angular/router';
import { NavManagerComponent } from './nav-manager/nav-manager.component';
import { ValidationDemandesComponent } from './validation-demandes/validation-demandes.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AbsenceUpdateComponent } from './absences/absence-update/absence-update.component';
import { TestInputAbsenceComponent } from './test-input-absence/test-input-absence.component';

const appRoutes: Routes = [
  { path: 'validDmdes', component: ValidationDemandesComponent }, // /page1 affiche le composant A
  { path: 'accueil', component: AccueilComponent },
  { path: 'gestionAbs', component: AbsenceRequestComponent },
  { path: '**', redirectTo: 'acceuil' } // redirige vers la route page1 par défaut
];

@NgModule({
  declarations: [
    AppComponent,
    AbsenceRequestComponent,
    NavManagerComponent,
    ValidationDemandesComponent,
    AccueilComponent,
    AbsenceUpdateComponent,
    TestInputAbsenceComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AbsenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
