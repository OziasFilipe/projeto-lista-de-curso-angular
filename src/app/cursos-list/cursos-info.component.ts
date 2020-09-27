import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component ({
  
  templateUrl: 'cursos-info.component.html'
})
export class CursosInfo implements OnInit {

cursosID:number;

constructor (private activy:ActivatedRoute ){

}
  ngOnInit(): void {

    this.cursosID = +this.activy.snapshot.paramMap.get('cursoLista.id');

  }



}