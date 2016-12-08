import { Component } from '@angular/core';

import { SharedWidgetService } from '../shared-widget.service';

@Component({
  moduleId: module.id,
  selector: 'widget-2',
  templateUrl: 'widget-2.component.html',
  styleUrls: ['./widget-2.component.css']
})
export class Widget2Component {
  constructor(public widgetsSharedService: SharedWidgetService) {
  }
}
