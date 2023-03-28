import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObservablePipeObserverComponent } from './features/observable-pipe-observer/observable-pipe-observer.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablePipeObserverComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
