import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>
    <button (click)="acumular(base)">+ {{ base }}</button>
    <span> {{ numero }} </span>
    <button (click)="acumular(-base)">- {{ base }}</button>
  `,
})
export class ContadorComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
  //tarea
  base: number = 5;

  acumular(valor: number = 0) {
    this.numero += valor;
  }

  //tarea
  //crear base:number=5;
}
//tarea crear modulo contador
