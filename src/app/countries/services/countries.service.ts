import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private _apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private _http: HttpClient) {}

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this._apiUrl}/capital/${term}`;

    return this._http.get<Country[]>(url).pipe(
      catchError(() => {
        return of([]); // of() nos permite retornar un observable con un valor por defecto, en este caso un arreglo vacío cuando se produce un error
      })
    );
  }

  searchCountry(term: string) {
    const url = `${this._apiUrl}/name/${term}`;

    return this._http.get<Country[]>(url).pipe(
      catchError(() => {
        return of([]); // of() nos permite retornar un observable con un valor por defecto, en este caso un arreglo vacío cuando se produce un error
      })
    );
  }

  searchByRegion(region: string): Observable<Country[]> {
    const url = `${this._apiUrl}/region/${region}`;

    return this._http.get<Country[]>(url)
    .pipe(
      catchError(() => {
        return of([]); // of() nos permite retornar un observable con un valor por defecto, en este caso un arreglo vacío cuando se produce un error
      })
    );
  }
}
