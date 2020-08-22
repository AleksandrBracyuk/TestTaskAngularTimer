import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { buffer, filter, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-wait-button',
  templateUrl: './wait-button.component.html',
  styleUrls: ['./wait-button.component.scss'],
  inputs: ['isActive'],
})
export class WaitButtonComponent implements OnInit, AfterViewInit {
  isActive: boolean;

  constructor(public element: ElementRef) {
    // https://habr.com/ru/post/425959/
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    //https://www.learnrxjs.io/learn-rxjs/operators/transformation/buffer
    let clicks$ = fromEvent(this.element.nativeElement, 'click');
    clicks$
      .pipe(
        buffer(clicks$.pipe(throttleTime(300))),
        filter((clickArray) => clickArray.length > 1)
      )
      .subscribe(() => {
        // console.log('click twise');
        this.clickTwice.emit(null);
      });
  }

  @Output()
  clickTwice: EventEmitter<any> = new EventEmitter();
}
