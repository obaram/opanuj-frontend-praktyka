import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Country } from '../../types/types';

@Component({
  selector: 'country-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './country-card.component.html',

})
export class CountryCardComponent {
  @Input() country!: Country | null;
  @Input() hideName!: boolean;
  title = 'country-card';

  ngOnInit(){
    console.log(this.country)
  }
}
