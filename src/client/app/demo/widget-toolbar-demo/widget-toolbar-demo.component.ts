import { Component, Output, EventEmitter, Input } from '@angular/core';
import { WidgetsDemoService } from "../widgets-demo-service/widgets-demo.service";

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'widget-toolbar-demo',
  templateUrl: 'widget-toolbar-demo.component.html',
  styleUrls: ['widget-toolbar-demo.component.css'],
})
export class WidgetToolbarDemoComponent {
  @Input() id: string|number;

  @Output() onRemove = new EventEmitter<any>();

  constructor(private widgetsDemoService: WidgetsDemoService) {
  }

  DoSomething() {
    console.log('Doing something');
  }

  remove() {
    this.widgetsDemoService.removeElement(this.id);
  }
}
