import { Component, input } from '@angular/core';

@Component({
  selector: 'app-detalle-articulo',
  imports: [],
  templateUrl: './detalle-articulo.html',
  styleUrl: './detalle-articulo.css'
})
export class DetalleArticulo {

  articleId = input<number | null>();
}
