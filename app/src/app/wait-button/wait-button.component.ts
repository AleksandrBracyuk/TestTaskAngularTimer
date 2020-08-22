import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wait-button',
  templateUrl: './wait-button.component.html',
  styleUrls: ['./wait-button.component.scss'],
})
export class WaitButtonComponent implements OnInit, AfterViewInit {
  constructor(public element: ElementRef) {
    // https://habr.com/ru/post/425959/
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    //// todo у  Observable нет fromEvent??? тут не работает
    // let cliskStream$ = Observable.fromEvent(
    //   this.element.nativeElement,
    //   'click'
    // );
    // cliskStream$
    //   .buffer(cliskStream$.debounce(300))
    //   /*тут как-то отфильтровать что было >=2 нажатия*/
    //   .forEach(this.clickTwice.emit(null));
  }

  @Output()
  clickTwice: EventEmitter<any> = new EventEmitter();
}
