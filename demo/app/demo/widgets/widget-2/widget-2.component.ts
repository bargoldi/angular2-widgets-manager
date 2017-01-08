import { Component } from '@angular/core';

import { SharedWidgetService } from '../shared-widget.service';

@Component({
  selector: 'widget-2',
  templateUrl: 'widget-2.component.html',
  styleUrls: ['widget-2.component.css']
})
export class Widget2Component {
  constructor(public widgetsSharedService: SharedWidgetService) {
  }
}
