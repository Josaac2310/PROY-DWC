import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { DetalleComponent } from './components/detalle/detalle.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'fotos', component: FotosComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: '**', redirectTo: '/inicio' }
];