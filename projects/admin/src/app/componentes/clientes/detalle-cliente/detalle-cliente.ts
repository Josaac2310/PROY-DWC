import { Component, Input, input } from '@angular/core';
import { Cliente } from '../../../../../shared/src/lib/modelos/cliente';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle-cliente',
  imports: [FormsModule],
  templateUrl: './detalle-cliente.html',
  styleUrl: './detalle-cliente.css',
})
export class DetalleCliente {
  @Input() clienteSeleccionado: Cliente | null = null;


}
