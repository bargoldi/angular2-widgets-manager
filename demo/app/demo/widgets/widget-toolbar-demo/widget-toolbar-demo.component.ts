import { Component, EventEmitter, Input, Output } from '@angular/core';

import { WidgetsDetailsService } from '../../widgets-details-service/widgets-details.service';

/**
 * This class represents the widgets toolbar component used for demo.
 */
@Component({
  selector: 'widget-toolbar-demo',
  templateUrl: 'widget-toolbar-demo.component.html',
  styleUrls: ['widget-toolbar-demo.component.css'],
})
export class WidgetToolbarDemoComponent {
  @Input() id: string|number;
  @Input() removeHandler: Function;

  @Output() onRemove = new EventEmitter<string|number>();

  constructor(private widgetsDetailsService: WidgetsDetailsService) {
  }

  doSomething() {
    console.log('Doing something');
  }

  remove() {
    this.widgetsDetailsService.removeElement(this.id);
    this.onRemove.emit(this.id);
  }
}
