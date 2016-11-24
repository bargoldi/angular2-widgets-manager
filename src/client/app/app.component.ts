import { Component, OnInit } from '@angular/core';
import { Config } from './shared/index';
import { WidgetsGridComponent } from './widgets-manager/widgets-grid/widgets-grid.component';
import './operators';

import { Demo1Component } from './demo/demo-1/demo-1.component';
import { Demo2Component } from './demo/demo-2/demo-2.component';
import { ComponentDetails } from "./widgets-manager/widgets-grid/component-details.model";

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  directives: [WidgetsGridComponent, Demo1Component, Demo2Component],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  componentsDetails: Array<ComponentDetails> = [];

  gridConfig = {margins: [2], cascade: 'left'};
  gridItemConfig = {};

  textTest = 'Something';

  constructor() {
    console.log('Environment config', Config);
  }

  ngOnInit(): void {
    this.componentsDetails.push(<ComponentDetails>{
      gridItemConfig: {
        sizex: 2,
        sizey: 1,
        fixed: true
      },
      name: 'Demo1',
      html: '<demo-1></demo-1>'
    });

    this.componentsDetails.push(<ComponentDetails>{
      gridItemConfig: {
        sizex: 1,
        sizey: 1
      },
      name: 'Demo2',
      html: '<demo-2></demo-2>'
    });
  }
}
