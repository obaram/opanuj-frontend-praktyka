import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Country } from '../../types/types';
import { CountryCardComponent } from '../country-card/country-card.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'countries-quiz',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CountryCardComponent],
  templateUrl: 'countries-quiz.component.html'
})
export class CountriesQuizComponent {
  @Input() country!: Country;
  @Output() redraw: EventEmitter<undefined> = new EventEmitter<undefined>();

  public name$: BehaviorSubject<string> = new BehaviorSubject<string>("");

  public onNameChange(event: Event){
    const value = (event.target as HTMLInputElement).value;
    this.name$.next(value);
  }

  public onRedraw(){
    this.redraw.emit()
  }

  public checkCountryName(){
    if(this.name$.value === this.country.name.common) {
      alert("Correct")
    } else alert("Incorrect")
  }
}
