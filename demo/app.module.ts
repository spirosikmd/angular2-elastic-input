import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {Elastic} from '../src/elastic.directive';
@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, Elastic],
  bootstrap: [AppComponent]
})
export class AppModule {
}
