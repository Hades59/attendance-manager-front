import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AbsenceVisuComponent } from './absences/absence-visu/absence-visu.component';
import { NavManagerComponent } from './nav-manager/nav-manager.component';

/*const appRoutes: Routes = [
  { path: 'classique', component: ClassiqueComponent }, // /page1 affiche le composant A
  { path: '**', redirectTo: 'classique'} // redirige vers la route page1 par défaut
];*/

@NgModule({
  declarations: [
    AppComponent,
    AbsenceVisuComponent,
    NavManagerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
