import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Widget2Component } from './widget-2.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule],
  declarations: [Widget2Component],
  exports: [Widget2Component],
})
export class Widget2ComponentModule {
}
