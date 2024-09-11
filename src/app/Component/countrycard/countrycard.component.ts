import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-countrycard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countrycard.component.html',
  styleUrls: ['./countrycard.component.css'],
})
export class CountryCardComponent {
  @Input() countries: any[] = [];

  constructor(private router: Router) {} // Inject Router

  navigateToDetail(countryName: string): void {
    this.router.navigate(['/country', countryName]); // Navigate to country detail
  }
}
