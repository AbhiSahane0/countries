import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <app-navbar></app-navbar>
    <app-searchbox></app-searchbox>
    <app-countycard></app-countycard>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}
