import { Routes } from '@angular/router';
import { HomePagesPage } from './home-pages/home-pages.page';
import { DetailsPage } from './details/details.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePagesPage,
  },
  {
    path: 'details/:id',
    component: DetailsPage,
  },
];
