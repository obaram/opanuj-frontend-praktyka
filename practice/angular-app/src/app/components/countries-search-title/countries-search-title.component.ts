import {Component, Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'countries-search-title',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: 'countries-search-title.component.html',
})
export class CountriesSearchTitleComponent {
  @Input() text: string = '';
  title = 'countries-search-title';
}
