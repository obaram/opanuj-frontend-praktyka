import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CountriesSearchContainerComponent} from "./containers/countries-search-container/CountriesSearchContainer.component";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountriesSearchContainerComponent, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
}
