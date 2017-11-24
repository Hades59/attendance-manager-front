import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

/*const appRoutes: Routes = [
  { path: 'classique', component: ClassiqueComponent }, // /page1 affiche le composant A
  { path: '**', redirectTo: 'classique'} // redirige vers la route page1 par défaut
];*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
