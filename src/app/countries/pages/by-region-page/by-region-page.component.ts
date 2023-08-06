import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  placeholder = 'Buscar por región...';
  public countries:Country[] = [];

  constructor( private _countriesService:CountriesService) { }

  searchByRegion( region: string ):void {
    this._countriesService.searchByRegion( region )
      .subscribe( countries => {
        this.countries = countries;
      });
  }

}
