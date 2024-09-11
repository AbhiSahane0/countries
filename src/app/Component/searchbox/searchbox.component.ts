import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  standalone: true,
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css'],
})
export class SearchboxComponent {
  @Output() searchChange: EventEmitter<{ search: string; region: string }> =
    new EventEmitter();

  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    if (target) {
      const searchValue = target.value;
      const selectedRegion = this.getSelectedRegion();
      console.log('Emitting search:', searchValue, 'Region:', selectedRegion);
      this.searchChange.emit({
        search: target.value,
        region: this.getSelectedRegion(),
      });
    }
  }

  onRegionChange(event: Event): void {
    const target = event.target as HTMLSelectElement | null;
    if (target) {
      const searchValue = target.value;
      const selectedRegion = this.getSelectedRegion();
      console.log('Emitting search:', searchValue, 'Region:', selectedRegion);
      this.searchChange.emit({
        search: this.getSearchValue(),
        region: target.value,
      });
    }
  }

  private getSelectedRegion(): string {
    const selectElement = document.querySelector(
      '.filter-dropdown'
    ) as HTMLSelectElement;
    return selectElement ? selectElement.value : '';
  }

  private getSearchValue(): string {
    const inputElement = document.querySelector(
      '.search-input'
    ) as HTMLInputElement;
    return inputElement ? inputElement.value : '';
  }
}
