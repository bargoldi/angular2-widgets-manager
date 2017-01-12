import { Component } from '@angular/core';

import { SharedWidgetService } from '../shared-widget.service';

/**
 * This class represents the main application component.
 */
@Component({
  selector: 'widget-1',
  templateUrl: 'widget-1.component.html',
  styleUrls: ['widget-1.component.css']
})
export class Widget1Component {
  constructor(public widgetsSharedService: SharedWidgetService) {
  }
}
