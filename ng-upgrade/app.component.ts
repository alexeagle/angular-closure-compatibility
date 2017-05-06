import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<div id="angular">{{message}}</div>`,
})
export class AppComponent {
  message: string;
  constructor() {
    this.message = `Hello from new Angular`;
  }
}