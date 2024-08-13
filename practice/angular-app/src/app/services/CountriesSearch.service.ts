
import {HttpClient} from "@angular/common/http";
import { BehaviorSubject, catchError, combineLatest, map, Observable, of, pipe, skip, switchMap, tap } from 'rxjs';
import {Injectable} from "@angular/core";
import {Country} from "../types/types";

@Injectable({
  providedIn: 'root',
})

export class CountriesSearchService{
  public countriesSource$: Observable<Country[]> = new Observable<Country[]>();
  public countries$: Observable<Country[]> = new Observable<Country[]>();
  public allCountries$: Observable<Country[]> = new Observable<Country[]>();

  private name$ = new BehaviorSubject("");
  private _sortBy$ = new BehaviorSubject<string | null>("alphabetically");
  private _order$ = new BehaviorSubject("ASC");

  public sortBy$ = this._sortBy$.asObservable();
  public order$ = this._order$.asObservable();

  public get name(): string {
    return this.name$.value;
  }

  public setName(name: string) {
    this.name$.next(name);
  }

  public setSortBy(value: string) {
    this._sortBy$.next(value);
  }

  public setOrder(name: string) {
    this._order$.next(name);
  }

  constructor(private httpClient: HttpClient) {
    this.countriesSource$ = this.name$.pipe(skip(1), switchMap((name) => this.httpClient.get<Country[]>(`https://restcountries.com/v3.1/name/${name}`).pipe(catchError(_ => of([]) ))), tap((data) => console.log(data)))
    this.allCountries$ = this.httpClient.get<Country[]>(`https://restcountries.com/v3.1/all`).pipe(catchError(_ => of([]) ));

    this.countries$ = combineLatest([this.countriesSource$, this.sortBy$, this.order$]).pipe(
      map(([countries, sortBy, order]) => {
        if(this._sortBy$.value){
          return (sortData(countries, sortBy, order));
        }
        return countries;
      }),
      tap((countries) => console.log(countries))
    )
  }

}

function sortData(data: Country[] | null, sortBy: string | null, order: string): Country[]{
  if(!data) return []
  const ascending = order === "ASC";
  console.log(ascending)
  if (sortBy === "alphabetically"){
    return data.sort((a,b) => {
      if(a.name.common < b.name.common){
        return ascending ?-1 : 1;
      } else if (a.name.common > b.name.common){
        return  ascending ? 1 : -1;
      }
      return 0;
    })
  }

  if (sortBy === "population"){
    return data.sort((a,b) => {
      if(a.population < b.population){
        return ascending ? -1 : 1;
      } else if (a.population > b.population){
        return  ascending ? 1 : -1;
      }
      return 0;
    })
  }
  return data;
}
