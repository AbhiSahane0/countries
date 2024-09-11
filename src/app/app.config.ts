import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // Import routes Impo

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Initialize RouterModule with routes
  exports: [RouterModule], // Export RouterModule
})
export class appConfig {}
