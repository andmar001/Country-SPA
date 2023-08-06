import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  placeholder = 'Buscar por país...';
  public countries:Country[] = [];

  constructor( private _countriesService:CountriesService) { }

  searchByCountry( term: string ):void {
    this._countriesService.searchCountry( term )
      .subscribe( countries => {
        this.countries = countries;
      })
  }


}
