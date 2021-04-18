import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//import { ContadorComponent } from './contador/contador/contador.component';

//import { HeroeComponent } from './heroes/horoe/heroe.componet';
//import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
//Tarea
//Crear un modilo llamado ContadorModulo
//declaraciones

@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent
  ],
  imports: [BrowserModule, HeroesModule, ContadorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
