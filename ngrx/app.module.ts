import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './counter';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({counter: counterReducer})
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}