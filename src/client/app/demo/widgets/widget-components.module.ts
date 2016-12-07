import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Widget1ComponentModule } from './widget-1/widget-1.module';
import { Widget2ComponentModule } from './widget-2/widget-2.module';
import { WidgetToolbarDemoModule } from './widget-toolbar-demo/widget-toolbar-demo.module';
import { WidgetsDemoService } from './widgets-demo-service/widgets-demo.service';
import {WidgetsPipeModule} from './../widgets-pipe/widgets-pipe.module';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  exports: [Widget1ComponentModule, Widget2ComponentModule, WidgetToolbarDemoModule],
  providers: [WidgetsDemoService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WidgetComponentsModule {
  static forRoot():ModuleWithProviders {
    return {
      ngModule: WidgetComponentsModule
    };
  }
}
