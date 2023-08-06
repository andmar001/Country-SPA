import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [
    `
      img{
        width: 50px;
        height: 50px;
        border-radius: 100%;

      }
    `
  ]
})
export class CountryTableComponent {

  @Input() countries: Country[] = [];

}
