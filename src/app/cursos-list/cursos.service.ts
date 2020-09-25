import { Injectable } from "@angular/core";
import { Cursos } from "./cursos";


@Injectable ({
  providedIn:'root'
})
export class CursosService {

Cursos:Cursos[] ;

RetornandoValor():Cursos[] {

  return CURSOS;
}

}

 let CURSOS: Cursos[] = [
    {
        id: 1,
        name: 'Angular: CLI',
        releaseDate: 'september 25, 2020',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        image: 'https://cdn.jsdelivr.net/gh/OziasFilipe/projeto-lista-de-curso-angular@master/src/assets/Img/cli.png'
    },
    {
        id: 2,
        name: 'Angular: Forms',
        releaseDate: 'september,25,2020',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duration: 80,
        code: 'DWQ-3412',
        rating: 3.5,
        price: 24.99,
        image: 'https://cdn.jsdelivr.net/gh/OziasFilipe/projeto-lista-de-curso-angular@master/src/assets/Img/animations.png'
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        releaseDate: 'september 25, 2020',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duration: 80,
        code: 'QPL-0913',
        rating: 4.0,
        price: 36.99,
        image: 'https://cdn.jsdelivr.net/gh/OziasFilipe/projeto-lista-de-curso-angular@master/src/assets/Img/http.png'
    },
    {
        id: 4,
        name: 'Angular: Router',
        releaseDate: 'september 25, 2020',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duration: 80,
        code: 'OHP-1095',
        rating: 4.5,
        price: 46.99,
        image: 'https://cdn.jsdelivr.net/gh/OziasFilipe/projeto-lista-de-curso-angular@master/src/assets/Img/router.png'
    },
    {
        id: 5,
        name: 'Angular: Animations',
        releaseDate: 'september 25, 2020',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        price: 56.99,
        image: 'https://cdn.jsdelivr.net/gh/OziasFilipe/projeto-lista-de-curso-angular@master/src/assets/icon%20angular.png'

    }
];



