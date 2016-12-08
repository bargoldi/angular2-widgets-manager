import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { HtmlOutlet } from './component-factory.directive';

@NgModule({
  declarations: [HtmlOutlet],
  exports: [HtmlOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentFactoryModule {
}
