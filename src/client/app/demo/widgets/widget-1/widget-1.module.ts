import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Widget1Component } from './widget-1.component';


/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule],
  declarations: [Widget1Component],
  exports: [Widget1Component],
})
export class Widget1ComponentModule {
}
