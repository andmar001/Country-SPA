import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit {

  private debouncer:Subject<string> = new Subject<string>();

  @Input() placeholder: string = '';

  @Output() onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(300)  //espera 1 segundo para emitir el valor
      )
      .subscribe((value) => {
        this.onDebounce.emit(value);
    });
  }

  emitValue( value: string ):void {
    this.onValue.emit( value );
  }

  onKeyPress( searchTerm:string ){
    this.debouncer.next( searchTerm );  // emitir el valor del debouncer
  }

}
