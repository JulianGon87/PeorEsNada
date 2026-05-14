import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'publicacion-add',
    loadComponent: () => import('./publicacion-add/publicacion-add.page').then( m => m.PublicacionAddPage)
  },
];
