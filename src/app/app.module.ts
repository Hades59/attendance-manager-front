import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AbsenceRequestComponent } from './absences/absence-request/absence-request.component'
import {AbsenceService} from './service/absence-service.service'
import {HttpClientModule} from '@angular/common/http';

/*const appRoutes: Routes = [
  { path: 'classique', component: ClassiqueComponent }, // /page1 affiche le composant A
  { path: '**', redirectTo: 'classique'} // redirige vers la route page1 par défaut
];*/

@NgModule({
  declarations: [
    AppComponent,
    AbsenceRequestComponent
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
