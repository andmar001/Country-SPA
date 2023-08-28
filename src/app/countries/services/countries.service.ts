import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private _apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore:CacheStore = {
    byCapital : { term:'', countries:[] },
    byCountries : { term:'', countries:[] },
    byRegion : { region:'', countries:[] },
  }

  constructor(private _http: HttpClient) {
    console.log('CountriesService initialized');
  }

  private getCountriesRequest( url:string ):Observable<Country[]>{
    return this._http.get<Country[]>(url)
      .pipe(
        catchError( () => of([]) ),
      )
  }

  searchCountryByAlphaCode( code:string ):Observable<Country | null>{
    const url = `${this._apiUrl}/alpha/${code}`;

    return this._http.get<Country[]>(url)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null),   // Si el arreglo de países es mayor a 0, entonces retornamos el primer país, de lo contrario retornamos null
        catchError( () => of( null ) ),
        // delay(2000)
      );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this._apiUrl}/capital/${term}`;

    return this.getCountriesRequest(url)
      .pipe(
        tap( countries => this.cacheStore.byCapital = { term, countries } )
      )
  }

  searchCountry(term: string) {
    const url = `${this._apiUrl}/name/${term}`;

    return this.getCountriesRequest(url)
      .pipe(
        tap( countries => this.cacheStore.byCountries = { term, countries } )
      )
  }

  searchByRegion(region: Region): Observable<Country[]> {
    const url = `${this._apiUrl}/region/${region}`;

    return this.getCountriesRequest(url)
      .pipe(
        tap( countries => this.cacheStore.byRegion = { region, countries } )
      )
  }
}
