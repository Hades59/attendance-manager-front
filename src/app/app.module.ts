import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { NavManagerComponent } from './nav-manager/nav-manager.component';
import { ValidationDemandesComponent } from './validation-demandes/validation-demandes.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AbsenceRequestComponent } from './absences/absence-request/absence-request.component'
import { AbsenceService } from './shared/service/absence.service'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Absence } from './shared/domain/absence'
import { AppComponent } from './app.component';
import { AbsenceVisuComponent } from './absences/absence-visu/absence-visu.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from './shared/pipes/date.pipe';

const appRoutes: Routes = [
  { path: 'validDmdes', component: ValidationDemandesComponent }, // /page1 affiche le composant A
  { path: 'accueil', component: AccueilComponent },
  { path: 'gestionAbs', component: AbsenceVisuComponent},
  { path: 'request', component: AbsenceRequestComponent},
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
    AbsenceVisuComponent,
    NavManagerComponent,
    DatePipe
  ],

  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AbsenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
