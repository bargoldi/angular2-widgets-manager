import { Component, OnInit } from '@angular/core';
import { Config } from './shared/index';
import './operators';

import { WidgetsDemoService } from './demo/widgets-demo-service/widgets-demo.service';
import { NgGridConfig } from 'angular2-grid';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  providers: [WidgetsDemoService]
})
export class AppComponent implements OnInit {
  gridConfig = <NgGridConfig>{margins: [2], cascade: 'left', max_rows: 2};

  constructor(public widgetsDemoService: WidgetsDemoService) {
    console.log('Environment config', Config);
  }

  ngOnInit(): void {
  }

  boNeadken(mashu: any) {
    console.log(mashu);
  }
}
