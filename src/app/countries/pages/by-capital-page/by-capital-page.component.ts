import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  placeholder = 'Buscar por capital...';
  public countries:Country[] = [];
  public isLoading:boolean = false;

  constructor( private _countriesService:CountriesService) { }

  searchByCapital( term: string ):void {

    this.isLoading = true;
    this._countriesService.searchCapital( term )
      .pipe(
        delay(1000)
      )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      })

  }
}
