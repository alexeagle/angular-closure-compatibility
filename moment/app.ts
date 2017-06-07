import * as momentx from 'moment';
declare var moment: typeof momentx;

import {Component, Injectable, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


@Component({
  selector: 'hello',
  template: `<div>{{message}}</div>`,
})
@Injectable()
export class Hello {
  message: string;
  constructor() {
    this.message = `Happy ${moment().format('dddd')}`;
  }
}

@NgModule({
  declarations: [Hello],
  bootstrap: [Hello],
  imports: [BrowserModule],
})
export class AppModule {
}
