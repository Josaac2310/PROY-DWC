import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'articulos',
    loadComponent: () => import('./componentes/articulos/articulos').then(m => m.Articulos)
  },
  {
    path: 'clientes',
    loadComponent: () => import('./componentes/clientes/clientes').then(m => m.Clientes)
  },
  {
    path: 'cliente-detalle/:id',
    loadComponent: () => import('./componentes/clientes/cliente-detalle/cliente-detalle').then(m => m.ClienteDetalle)
  },
  {
    path: '',
    redirectTo: 'articulos',
    pathMatch: 'full'
  }
];
