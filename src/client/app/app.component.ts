import { Component, OnInit } from '@angular/core';
import { Config } from './shared/index';
import './operators';

import { Demo1Component } from './demo/demo-1/demo-1.component';
import { Demo2Component } from './demo/demo-2/demo-2.component';
import { WidgetsGridComponent } from './widgets-manager/widgets-grid/widgets-grid.component';
import { WidgetsDemoService } from "./demo/widgets-demo-service/widgets-demo.service";
import { NgGridConfig } from "angular2-grid";

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  directives: [WidgetsGridComponent, Demo1Component, Demo2Component],
  providers: [WidgetsDemoService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  gridConfig = <NgGridConfig>{margins: [2], cascade: 'left', max_rows: 2};

  constructor(public widgetsDemoService: WidgetsDemoService) {
    console.log('Environment config', Config);
  }

  ngOnInit(): void {
  }
}
