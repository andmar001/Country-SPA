import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer:Subject<string> = new Subject<string>();
  private debouncerSuscription? : Subscription;

  @Input() placeholder: string = '';

  @Output() onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSuscription  = this.debouncer
      .pipe(
        debounceTime(300)  //espera 1 segundo para emitir el valor
      )
      .subscribe((value) => {
        this.onDebounce.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.debouncer.unsubscribe();
  }

  emitValue( value: string ):void {
    this.onValue.emit( value );
  }

  onKeyPress( searchTerm:string ){
    this.debouncer.next( searchTerm );  // emitir el valor del debouncer
  }

}
