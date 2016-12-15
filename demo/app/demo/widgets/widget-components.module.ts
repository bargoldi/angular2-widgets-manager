import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';

import { Widget1ComponentModule } from './widget-1/widget-1.module';
import { Widget2ComponentModule } from './widget-2/widget-2.module';
import { WidgetToolbarDemoModule } from './widget-toolbar-demo/widget-toolbar-demo.module';
import { SharedWidgetService } from './shared-widget.service';

@NgModule({
  exports: [Widget1ComponentModule, Widget2ComponentModule, WidgetToolbarDemoModule],
  providers: [SharedWidgetService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WidgetComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WidgetComponentsModule
    };
  }
}
