import { Component } from '@angular/core';

import { Personaje } from "../interfaces/dbz.interfaces";
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [];
  nuevo: Personaje = {
    nombre: 'El Papu',
    poder: 10000
  }
  constructor() { }
}
