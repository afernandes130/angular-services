import { Component, OnInit, Input } from '@angular/core';
import { CursosService } from '../shared/cursos.service';


@Component({
  selector: 'app-aviso-curso-criado',
  templateUrl: './aviso-curso-criado.component.html',
  styleUrls: ['./aviso-curso-criado.component.css']
})
export class AvisoCursoCriadoComponent implements OnInit {

   textlog: string = ''


  constructor(private _cursoservice: CursosService) {
  }


  ngOnInit(): void {
    this._cursoservice.cursoemit.subscribe(
        //cursoname => console.log(`o curso "${cursoname}" foi adicionado com sucesso`)
        cursoname => this.textlog = `o curso "${cursoname}" foi adicionado com sucesso`
    )
  }

}
