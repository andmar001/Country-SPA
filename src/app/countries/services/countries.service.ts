import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private _apiUrl:string = 'https://restcountries.com/v3.1';

  constructor( private _http:HttpClient) { }

  searchCapital( term:string ):Observable<Country[]>{
    return this._http.get<Country[]>(`${this._apiUrl}/capital/${term}`);
  }

}
