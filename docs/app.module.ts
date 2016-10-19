import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ElasticInputDirective} from '../src/elastic-input.directive';
@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ElasticInputDirective],
  bootstrap: [AppComponent]
})
export class AppModule {
}
