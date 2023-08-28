import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  placeholder = 'Buscar por región...';
  public countries:Country[] = [];

  public regions:Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion? : Region;

  constructor( private _countriesService:CountriesService) { }

  searchByRegion( region: Region ):void {

    this.selectedRegion = region;

    this._countriesService.searchByRegion( region )
      .subscribe( countries => {
        this.countries = countries;
      });
  }

}
