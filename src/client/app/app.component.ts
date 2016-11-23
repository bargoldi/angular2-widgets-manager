import { Component } from '@angular/core';
import { Config } from './shared/index';
import { WidgetsGridComponent } from './widgets-manager/widgets-grid/widgets-grid.component';
import './operators';

import { Demo1Component } from './demo/demo-1/demo-1.component';
import { Demo2Component } from './demo/demo-2/demo-2.component';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  directives: [WidgetsGridComponent, Demo1Component, Demo2Component]
})
export class AppComponent {
  components = ['<demo-2></demo-2>',
    '<demo-1></demo-1>'];

  constructor() {
    console.log('Environment config', Config);
  }
}
