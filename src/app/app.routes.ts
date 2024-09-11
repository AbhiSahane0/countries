import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { CountryDetailComponent } from './Component/county-detail/county-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home page route
  { path: 'country/:name', component: CountryDetailComponent }, // Country detail route
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Wildcard route
];
