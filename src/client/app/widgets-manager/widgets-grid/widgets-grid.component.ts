import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgGrid, NgGridItem, NgGridConfig } from 'angular2-grid';

import { ComponentDetails } from './component-details.model';

/**
 * This class represents the lazy loaded WidgetsGridComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'widgets-grid',
  templateUrl: 'widgets-grid.component.html',
  styleUrls: ['widgets-grid.component.css'],
  directives: [NgGrid, NgGridItem]
})
export class WidgetsGridComponent implements OnInit {

  @Input() gridConfig: NgGridConfig = {'max_cols': 6, 'auto_resize': true};

  /**
   * Dynamic components details
   */
  @Input() componentsDetails: ComponentDetails[] = [];

  /**
   * Emitted on grid item drag start
   */
  @Output() onDragStart = new EventEmitter<NgGridItem>();

  /**
   * Emitted on grid item drag
   */
  @Output() onDrag = new EventEmitter<NgGridItem>();

  /**
   * Emitted on grid item drag stop
   */
  @Output() onDragStop = new EventEmitter<NgGridItem>();

  /**
   * Emitted on grid item resize start
   */
  @Output() onResizeStart = new EventEmitter<NgGridItem>();

  /**
   * Emitted on grid item resize
   */
  @Output() onResize = new EventEmitter<NgGridItem>();

  /**
   * Emitted on grid item resize stop
   */
  @Output() onResizeStop = new EventEmitter<NgGridItem>();

  /**
   * Emitted on grid item change
   */
  @Output() onItemChange = new EventEmitter<NgGridItem>();

  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * NgGrid onDragStart handler
   * @param gridItem
   */
  onDragStartHandler(gridItem: NgGridItem) {
    this.onDragStart.emit(gridItem);
  }

  /**
   * NgGrid onDrag handler
   * @param gridItem
   */
  onDragHandler(gridItem: NgGridItem) {
    this.onDrag.emit(gridItem);
  }

  /**
   * NgGrid
   * @param gridItem onDragStop Handler
   */
  onDragStopHandler(gridItem: NgGridItem) {
    this.onDragStop.emit(gridItem);
  }

  /**
   * NgGrid
   * @param gridItem onResizeStart Handler
   */
  onResizeStartHandler(gridItem: NgGridItem) {
    this.onResizeStart.emit(gridItem);
  }

  /**
   * NgGrid
   * @param gridItem onResize Handler
   */
  onResizeHandler(gridItem: NgGridItem) {
    this.onResize.emit(gridItem);
  }

  /**
   * NgGrid
   * @param gridItem onResizeStop Handler
   */
  onResizeStopHandler(gridItem: NgGridItem) {
    this.onResizeStop.emit(gridItem);
  }

  /**
   * NgGrid
   * @param gridItem onItemChange Handler
   */
  onItemChangeHandler(gridItem: NgGridItem) {
    this.onItemChange.emit(gridItem);
  }
}
