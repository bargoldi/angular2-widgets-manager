import { Component, Output, EventEmitter, Input } from '@angular/core';

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
  @Input() id:string|number;
  @Input() removeHandler:Function;

  @Output() onRemove = new EventEmitter<string|number>();


  constructor() {
  }

  doSomething() {
    console.log('Doing something');
  }

  remove() {
    this.onRemove.emit(this.id);
  }
}
