# angular2-elastic-input

Angular2 directive that adjusts the width of a text input while typing.

Based on [angular-elastic-input](https://github.com/jacek-pulit/angular-elastic-input).

## Install

`npm install --save angular2-elastic-input`

## Example

```typescript
import {NgModule, Component} from '@angular/core';
import {ElasticInputModule} from 'angular2-elastic-input';

@Component({
  template: `
    <input type="text" elastic-input>
  `
})
class AppComponent { }

@NgModule({
  imports: [ElasticInputModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Check the [docs](docs) for a complete example.
