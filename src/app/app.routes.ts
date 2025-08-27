import { Routes } from '@angular/router';

import { HomePage } from './home/home.page';

import { DetailsPage } from './details/details.page';

export const routes: Routes = [

  { path: '', component: HomePage },

  { path: 'details', component: DetailsPage },

  { path: '**', redirectTo: '' },  {
    path: 'home-pages',
    loadComponent: () => import('./home-pages/home-pages.page').then( m => m.HomePagesPage)
  },
  {
    path: 'details',
    loadComponent: () => import('./details/details.page').then( m => m.DetailsPage)
  }


];
 