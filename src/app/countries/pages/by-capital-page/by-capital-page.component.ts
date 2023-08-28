import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit{

  placeholder = 'Buscar por capital...';
  public countries:Country[] = [];
  public isLoading:boolean = false;
  public initialValue:string = '';

  constructor( private _countriesService:CountriesService) { }

  ngOnInit(): void {
    this.countries = this._countriesService.cacheStore.byCapital.countries;
    this.initialValue = this._countriesService.cacheStore.byCapital.term;
  }

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
