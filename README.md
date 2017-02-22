# angular2-widgets-manager
Angular2 widgets manager - grid possibility to DnD dynamic components.

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
  imports: [WidgetsManagerModule.forRoot(),],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    WidgetsManagerService.provideWidgetsModule(WidgetComponentsModule.forRoot());
  }
}

Now
## Configuration