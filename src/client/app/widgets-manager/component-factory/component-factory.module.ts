import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {HtmlOutlet} from './component-factory.service';

@NgModule({
  declarations: [HtmlOutlet],
  exports: [HtmlOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentFactoryModule {
}
