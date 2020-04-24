import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

    cursos: string[];
    cursoemit = new EventEmitter<string>();

    getcursos(){
      return this.cursos = ["Angular2", "SQL Server", "Python", "Java"]
    }

    addcursos(desccurso){
      this.cursos.push(desccurso)
      this.cursoemit.emit(desccurso)
    }
  constructor() { }
}
