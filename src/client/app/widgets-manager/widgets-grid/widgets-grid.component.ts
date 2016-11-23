import { Component, OnInit, ComponentFactoryResolver, Input, ViewEncapsulation } from '@angular/core';
import { NgGrid, NgGridItem } from 'angular2-grid';

/**
 * This class represents the lazy loaded WidgetsGridComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'widgets-grid',
  templateUrl: 'widgets-grid.component.html',
  styleUrls: ['widgets-grid.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [NgGrid, NgGridItem]
})
export class WidgetsGridComponent implements OnInit {
  @Input() components: Array<string> = [];
  @Input() componentsOrder: Array<ComponentDetails> = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
  }
}
