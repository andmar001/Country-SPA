import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  placeholder = 'Buscar por región...';

  public countries:Country[] = [];
  public regions:Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion? : Region;

  public isLoading:boolean = false;
  public initialValue:string = '';

  constructor( private _countriesService:CountriesService) { }

  ngOnInit(): void {
    this.countries = this._countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this._countriesService.cacheStore.byRegion.region;
  }

  searchByRegion( region: Region ):void {
    this.isLoading = true;
    this.selectedRegion = region;

    this._countriesService.searchByRegion( region )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }

}
