import { Articulo } from './articulo';
import { Injectable } from '@angular/core';

const ARTICULOS: Articulo[] = [
  { id: 1, nombre: 'Teclado', precio: 15 },
  { id: 2, nombre: 'Pantalla', precio: 30 },
  { id: 3, nombre: 'Procesador', precio: 50 }
];

@Injectable({
  providedIn: 'root'
})
export class Articles {

  getArticulos() {
    return ARTICULOS;
  }

}
