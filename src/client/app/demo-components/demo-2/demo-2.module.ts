import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Demo2Component } from './demo-2.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  declarations: [Demo2Component],
  exports: [Demo2Component],
})
export class Demo2ComponentModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Demo2ComponentModule
    };
  }
}
