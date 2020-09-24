import { Component, OnInit } from "@angular/core";
import { Cursos } from "./cursos";
import { CursosService } from "./cursos.service";

@Component ({
  selector:    'app-cursos-list' ,
  templateUrl: './cursos-list.html'
  
})

export class CursosList implements OnInit {

  cursos: Cursos[] ;
  title:String = 'ola hehe';


constructor (private cursosservice:CursosService) {

}


ngOnInit(): void {

    this.cursos = this.cursosservice.RetornandoValor();
 
}

}