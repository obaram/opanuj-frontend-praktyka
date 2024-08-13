import { Component } from '@angular/core';
import { CountriesSearchTitleComponent } from '../../components/countries-search-title/countries-search-title.component';
import { CountriesSearchService } from '../../services/CountriesSearch.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, combineLatestWith, map, Observable, Subscription, withLatestFrom } from 'rxjs';
import { CountryCardComponent } from '../../components/country-card/country-card.component';
import { Country } from '../../types/types';
import { CountriesSearchComponent } from '../../components/countries-search/countries-search.component';
import { CountriesQuizComponent } from '../../components/countries-quiz/countries-quiz.component';
import { Mode } from '../../consts/mode.enum';


@Component({
  selector: 'countries-search-container',
  standalone: true,
  imports: [CountriesSearchTitleComponent, CommonModule, FormsModule, CountryCardComponent, CountriesSearchComponent, CountriesQuizComponent],
  templateUrl: './CountriesSearchContainer.component.html',

})
export class CountriesSearchContainerComponent {
  private countriesSubscription = new Subscription();

  public mode$: BehaviorSubject<Mode> = new BehaviorSubject<Mode>(Mode.Search)
  public drewCountry$ = new Observable<Country>()
  public countries$ = this.countriesSearchService.countries$;
  public order$ = this.countriesSearchService.order$;
  public sortBy$ = this.countriesSearchService.sortBy$;
  public redraw$: BehaviorSubject<undefined> = new BehaviorSubject(undefined);

  public get name(): string {
    return this.countriesSearchService.name;
  }

  public onNameChange = (value: string) => {
    this.countriesSearchService.setName(value)
  }

  public onSortingChange = (value: string) => {
    this.countriesSearchService.setSortBy(value);
  }

  public onOrderChange = (value: string) => {
    this.countriesSearchService.setOrder(value);
  }

  constructor(private countriesSearchService: CountriesSearchService) {
    this.countriesSubscription = this.countriesSearchService.countriesSource$.subscribe();

    this.drewCountry$ = this.mode$.pipe(
      combineLatestWith(this.redraw$),
      withLatestFrom(this.countriesSearchService.allCountries$),
      map(([mode, data]) => data[Math.floor(Math.random()*data.length)]),
    )
  }

  public ngOnDestroy() {
    this.countriesSubscription.unsubscribe();
  }

  protected readonly Mode = Mode;
}

