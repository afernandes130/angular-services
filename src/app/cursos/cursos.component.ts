import { CursosService } from './../shared/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos : string[];

  addcurso(desccusrso){
    this._cursos.addcursos(desccusrso)
  }

  constructor(private _cursos : CursosService) { }

  ngOnInit(): void {
    this.cursos = this._cursos.getcursos()
  }

}
