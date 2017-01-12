import { ModuleWithProviders, NgModule } from '@angular/core';

import { WidgetToolbarDemoComponent } from './widget-toolbar-demo.component';

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
