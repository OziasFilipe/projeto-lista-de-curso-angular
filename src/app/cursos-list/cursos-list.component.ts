import { Component, OnInit } from "@angular/core";
import { Cursos } from "./cursos";
import { CursosService } from "./cursos.service";

@Component ({
 
  templateUrl: './cursos-list.html'
  
})

export class CursosList implements OnInit {

  cursos: Cursos[] ;
  title:String = 'ola hehe';

  filterBY:String;
  filterCursos: Cursos[] = [];

  digitado: String;


constructor (private cursosservice:CursosService) {

}


ngOnInit(): void {

    this.cursos = this.cursosservice.RetornandoValor();
   this.filterCursos = this.cursos;
}

  set filter(valor:String){

      this.filterBY = valor;
      this.filterCursos = this.cursos.filter((cursos:Cursos) => cursos.name.toLocaleLowerCase().indexOf(this.filterBY.toLocaleLowerCase()) > -1);

  }
  get filter(){
    return this.filterBY;
  }
  
}