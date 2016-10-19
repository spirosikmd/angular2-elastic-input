import {NgModule, ModuleWithProviders} from '@angular/core';
import {ElasticInputDirective} from './elastic-input.directive';

@NgModule({
  declarations: [ElasticInputDirective],
  exports: [ElasticInputDirective]
})
export class ElasticInputModule {
  static forRoot (): ModuleWithProviders {
    return {
      ngModule: ElasticInputModule
    };
  }
}
