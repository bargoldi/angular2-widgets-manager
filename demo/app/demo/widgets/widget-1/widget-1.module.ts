import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Widget1Component } from './widget-1.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Widget1Component],
  exports: [Widget1Component],
})
export class Widget1ComponentModule {
}
