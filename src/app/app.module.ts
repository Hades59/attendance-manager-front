import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Absence } from './shared/domain/absence'
import { AbsenceService } from './shared/service/absence.service';
import { AppComponent } from './app.component';
import { AbsenceVisuComponent } from './absences/absence-visu/absence-visu.component';
import { NavManagerComponent } from './nav-manager/nav-manager.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from './shared/pipes/date.pipe';
<<<<<<< HEAD
=======

>>>>>>> 3176b9b868096cf6c25c33a07db307f990836360
import { RouterModule, Routes } from '@angular/router';
import { ValidationDemandesComponent } from './validation-demandes/validation-demandes.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AbsenceRequestComponent } from './absences/absence-request/absence-request.component'


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
    AbsenceVisuComponent,
    NavManagerComponent,
<<<<<<< HEAD
    DatePipe,
    AbsenceRequestComponent,
    NavManagerComponent,
=======
>>>>>>> 3176b9b868096cf6c25c33a07db307f990836360
    ValidationDemandesComponent,
    AccueilComponent,
    DatePipe,
    AbsenceRequestComponent
  ],

  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
<<<<<<< HEAD
    BrowserModule,
=======
>>>>>>> 3176b9b868096cf6c25c33a07db307f990836360
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AbsenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
