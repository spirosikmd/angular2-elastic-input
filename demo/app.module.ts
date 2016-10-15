import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ElasticInput} from '../src/elastic-input.directive';
@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ElasticInput],
  bootstrap: [AppComponent]
})
export class AppModule {
}
