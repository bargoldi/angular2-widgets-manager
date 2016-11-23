import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Demo1Component } from './demo-1.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  declarations: [Demo1Component],
  exports: [Demo1Component],
})
export class Demo1ComponentModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Demo1ComponentModule
    };
  }
}
