import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Demo1ComponentModule } from './demo-1/demo-1.module';
import { Demo2ComponentModule } from './demo-2/demo-2.module';
import { WidgetToolbarDemoModule } from './widget-toolbar-demo/widget-toolbar-demo.module';
import { WidgetsDemoService } from './widgets-demo-service/widgets-demo.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  exports: [Demo1ComponentModule, Demo2ComponentModule, WidgetToolbarDemoModule],
  providers: [WidgetsDemoService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemoComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DemoComponentsModule
    };
  }
}
