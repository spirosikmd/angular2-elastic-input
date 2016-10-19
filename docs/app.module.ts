import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ElasticInputModule} from '../src/elastic-input.module';
@NgModule({
  imports: [BrowserModule, ElasticInputModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
