# angular2-widgets-manager
Angular2 dynamic components grid, based on widgets concept.

## Usage
First, installation:
```bash
$ npm install angular2-widgets-manager
```
Now, in order to use it you will probably need to configure it as UMD (for SystemJS/Webpack).
So don't forget to include the main file:
```bash
node_modules/angular2-widgets-manager/dist/main.js
```

Here's a code example to add it in your AppModule:
```bash
import { NgModule } from '@angular/core';
import { WidgetsManagerModule } from '../../src/main';
import { WidgetsManagerService } from '../../src/widgets-manager.service';

@NgModule({
  imports: [WidgetsManagerModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // This line is important as it passes YOUR module, the one
    // from which the manager will get the widgets components
    WidgetsManagerService.provideWidgetsModule(WidgetComponentsModule.forRoot());
  }
}
```

```bash
<widgets-grid (onDragStart)="doSomethingOnDragStart($event)"
              [componentsDetails]="componentsDetails"
              [gridConfig]="gridConfig"></widgets-grid>
```

## Configuration
### Grid configuration

You can find `NgGridConfig` in [angular2-grid][angular2-grid]

### Widgets configuration - Component Details

```bash
interface ComponentDetails {
    id?: string | number;
    name: string;
    html: string;
    gridItemConfig: NgGridItemConfig;
}
```
You can find `NgGridItemConfig` in [angular2-grid][angular2-grid]

[angular2-grid]: https://github.com/BTMorton/angular2-grid