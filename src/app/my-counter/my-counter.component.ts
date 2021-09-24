import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../counter.actions';
 
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>
 
  constructor(
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.select('count');
    // TODO: Connect `this.count$` stream to the current store `count` state
  }
 
  increment() {
    this.store.dispatch(increment());
    // TODO: Dispatch an increment action
  }
 
  decrement() {
    this.store.dispatch(decrement());
    // TODO: Dispatch a decrement action
  }
 
  reset() {
    this.store.dispatch(reset());
    // TODO: Dispatch a reset action
  }
}