import { NgModule, ModuleWithProviders } from '@angular/core';

import { WidgetToolbarDemoComponent } from './widget-toolbar-demo.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  declarations: [WidgetToolbarDemoComponent],
  exports: [WidgetToolbarDemoComponent],
})
export class WidgetToolbarDemoModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WidgetToolbarDemoModule
    };
  }
}
