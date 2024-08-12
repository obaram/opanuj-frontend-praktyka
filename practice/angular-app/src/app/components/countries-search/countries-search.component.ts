import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgForOf } from '@angular/common';
import { CountryCardComponent } from '../country-card/country-card.component';
import { Country } from '../../types/types';
import { CountriesSearchTitleComponent } from '../countries-search-title/countries-search-title.component';

@Component({
  selector: 'countries-search',
  standalone: true,
  imports: [RouterOutlet, FormsModule, AsyncPipe, CountryCardComponent, NgForOf, CountriesSearchTitleComponent],
  templateUrl: 'countries-search.component.html'
})
export class CountriesSearchComponent {
  @Input() sortBy!: string | null;
  @Input() order!: string | null;
  @Input() name!: string;
  @Input() countries!: Country[] | null;
  @Output() sortingChange = new EventEmitter<string>();
  @Output() orderChange = new EventEmitter<string>();
  @Output() nameChange = new EventEmitter<string>();

  public onSortingChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    this.sortingChange.emit(value)
  }

  public onOrderChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    this.orderChange.emit(value);
  }

  public onNameChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    this.nameChange.emit(value);
  }


  title = 'countries-search';
}
