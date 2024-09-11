import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { SearchboxComponent } from './Component/searchbox/searchbox.component';
import { CountryCardComponent } from './Component/countrycard/countrycard.component';
import countryData from './assets/data.json'; // Import the JSON file

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SearchboxComponent,
    CountryCardComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';
  allCountries = countryData; // Original data from JSON
  filteredCountries = countryData; // Filtered data to be displayed

  private searchTerm: string = '';
  private region: string = '';

  // Method to handle search and filter changes

  handleSearchChange(filter: { search: string; region: string }): void {
    this.searchTerm = filter.search ? filter.search.toLowerCase() : ''; // Update the search term
    this.region = filter.region || ''; // Update the region, default to empty string if null or undefined

    this.applyFilters(); // Apply both search and region filters
  }

  public applyFilters(): void {
    this.filteredCountries = this.allCountries.filter((country) => {
      const matchesSearch = this.searchTerm
        ? country.name.toLowerCase().includes(this.searchTerm)
        : true; // Always match if searchTerm is empty
      const matchesRegion = this.region ? country.region === this.region : true; // Always match if region is empty

      return matchesSearch && matchesRegion;
    });

    console.log(
      'Filtered countries based on search and region:',
      this.filteredCountries
    );
  }
}
