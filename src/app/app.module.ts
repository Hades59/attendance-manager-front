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


/*const appRoutes: Routes = [
  { path: 'classique', component: ClassiqueComponent }, // /page1 affiche le composant A
  { path: '**', redirectTo: 'classique'} // redirige vers la route page1 par défaut
];*/

@NgModule({
  declarations: [
    AppComponent,
    AbsenceVisuComponent,
    NavManagerComponent,
    DatePipe
  ],

  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
    

  ],
  providers: [AbsenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
