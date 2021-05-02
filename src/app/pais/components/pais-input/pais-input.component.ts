import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit{

  @Input()  placeHolderinput  : string = "";
  @Output() onEnterOutput: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce   : EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(
      valor => {
        console.log(valor)
        this.onDebounce.emit( valor );
      }
    )

  }

  buscar() {
    this.onEnterOutput.emit(this.termino);
  }

  teclaPesionada( ) {
    this.debouncer.next(this.termino);
  }
}
