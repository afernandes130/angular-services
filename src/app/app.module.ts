import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from './shared/cursos.service';
import { AvisoCursoCriadoComponent } from './aviso-curso-criado/aviso-curso-criado.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    AvisoCursoCriadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
