import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import countryData from '../../assets/data.json'; // Import your JSON file here

@Component({
  selector: 'app-country-detail',
  templateUrl: './county-detail.component.html',
  styleUrls: ['./county-detail.component.css'],
})
export class CountryDetailComponent implements OnInit {
  country: any;
  allCountries: any[] = countryData;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    // Fetch the country name from the route params and fetch the country data
    const countryName = this.route.snapshot.paramMap.get('name');
    this.country = this.allCountries.find(
      (country) => country.name === countryName
    );
  }

  goBack(): void {
    this.location.back();
  }

  getCountryNameByCode(code: string): string {
    const country = this.allCountries.find((c) => c.alpha3Code === code);
    return country ? country.name : code;
  }
}
