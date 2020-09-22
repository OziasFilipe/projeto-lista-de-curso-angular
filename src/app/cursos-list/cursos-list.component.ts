import { Component, OnInit } from "@angular/core";
import { Cursos } from "./cursos";

@Component ({
  selector:    'app-cursos-list' ,
  templateUrl: './cursos-list.html'
  
})

export class CursosList implements OnInit {

  cursos: Cursos[] = [];
  title:String = 'ola hehe';

ngOnInit(): void {

    this.cursos = [
      {
          id: 1,
          name:'Angula Curso',
          image:'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_angular_icon_130754.png',
          price:99.9,
          code:'xps-1958',
          duration:1.5,
          rating: 100,
          releaseDate:'novembro, 10 ,1955'

      } ,
      {    id: 2,
          name:'spring Curso',
          image:'https://www.jellyfishtechnologies.com/blog/wp-content/uploads/2018/09/icon-spring-boot-1-300x269.jpg',
          price:12.9,
          code:'asp-1958',
          duration:1.5,
          rating: 50,
           releaseDate:'abril, 4 ,2001'
       } 
        ,

    ]
}

}