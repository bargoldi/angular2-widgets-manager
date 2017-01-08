import { Component, OnInit } from '@angular/core';
import { NgGridConfig } from 'angular2-grid';

import { WidgetsDetailsService } from './demo/widgets-details-service/widgets-details.service';
import { SharedWidgetService } from './demo/widgets/shared-widget.service';

/**
 * This class represents the main application component.
 */
@Component({
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  providers: [WidgetsDetailsService, SharedWidgetService]
})
export class AppComponent implements OnInit {
  gridConfig = <NgGridConfig>{margins: [2], cascade: 'left', max_rows: 2};

  constructor(public widgetsDemoService: WidgetsDetailsService, public sharedWidgetsService: SharedWidgetService) {

    setTimeout(()=> {
      sharedWidgetsService.students.pop();
      console.log('Removed a student after 5 sec. to show shared service hierarchy');
    }, 5000);
  }

  ngOnInit(): void {
  }

  doSomethingOnDragStart(something: any) {
    console.log(something);
  }

  toggleGrid() {
    this.gridConfig.draggable = !this.gridConfig.draggable;
    this.gridConfig.resizable = !this.gridConfig.resizable;

    console.log(this.widgetsDemoService.componentsDetails);
  }
}
