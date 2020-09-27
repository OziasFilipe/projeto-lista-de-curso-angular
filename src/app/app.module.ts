import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CursosList } from './cursos-list/cursos-list.component';
import { NavBar } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404 } from './error-404/error-404.component';
import { CursosInfo } from './cursos-list/cursos-info.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot([
    {
      path: '',redirectTo: 'CursosList', pathMatch: 'full'
    }
    ,
    {
       path: 'CursosList/cursos/info/:cursoLista.id', component: CursosInfo
    }
    ,
    {
      path: 'CursosList' , component: CursosList 
    }
    ,
    {
      path: '**',component: Error404
    }
  ]) ],
  declarations: [ AppComponent, CursosList,NavBar],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
