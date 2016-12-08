import { Component, OnInit } from '@angular/core';
import { Config } from './shared/index';
import { NgGridConfig } from 'angular2-grid';

import { WidgetsDetailsService } from './demo/widgets-details-service/widgets-details.service';
import { WidgetsPipe } from './demo/widgets-pipe/widgets.pipe';
import { SharedWidgetService } from './demo/widgets/shared-widget.service';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  providers: [WidgetsDetailsService, SharedWidgetService]
})
export class AppComponent implements OnInit {
  gridConfig = <NgGridConfig>{margins: [2], cascade: 'left', max_rows: 2};

  constructor(public widgetsDemoService: WidgetsDetailsService, public sharedWidgetsService: SharedWidgetService) {
    console.log('Environment config', Config);

    setTimeout(()=> {
      sharedWidgetsService.students.pop();
      console.log('Removed a student after 5 sec. to show shared service hierarchy');
    }, 5000);
  }

  ngOnInit(): void {
  }

  doSomethingOnDragStart(mashu: any) {
    console.log(mashu);
  }
}
