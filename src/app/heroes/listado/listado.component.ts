import { Component } from '@angular/core';
//generado con ng g c heroes/listad
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['SpideMan', 'IronMan', 'hulk', 'Thor', 'Captain america'];
  heroeBorrado: string = '...';

  borrarHeroe() {
    //tarea
    //const heroeBorrado = this.heroes.shift() || '';
    //console.log(heroeBorrado);
    //this.heroeBorrado = heroeBorrado;
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
