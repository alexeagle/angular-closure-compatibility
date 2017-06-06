import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT } from './counter';
import { Observable } from 'rxjs/Observable'; 
import { Component } from '@angular/core';

interface AppState {
  counter: number;
}

@Component({
  selector: 'my-app',
  template: `
      <button id="increment" (click)="increment()">Increment</button>
      <div id="value">Current Count: {{ counter | async }}</div>
      <button id="decrement" (click)="decrement()">Decrement</button>
  `
})
export class AppComponent {
  counter: Observable<number>;

  constructor(private store: Store<AppState>){
    this.counter = store.select(state => state.counter);
  }

  increment(){
   this.store.dispatch({ type: INCREMENT });
  }

  decrement(){
   this.store.dispatch({ type: DECREMENT });
  }
}