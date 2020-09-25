import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CursosList } from './cursos-list/cursos-list.component';
import { NavBar } from './nav-bar/nav-bar.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CursosList,NavBar],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
