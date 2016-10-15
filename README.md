# angular2-elastic

Angular2 directive that adjusts the width of a text input while typing.

Based on [angular-elastic-input](https://github.com/jacek-pulit/angular-elastic-input).

## Install

`npm install --save angular2-elastic`

## Example

```typescript
import {NgModule, Component} from '@angular/core';
import {Elastic} from 'angular2-elastic';

@Component({
  template: `
    <input type="text" elastic>
  `
})
class AppComponent { }

@NgModule({
  declarations: [
    AppComponent,
    Elastic
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
