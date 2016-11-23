import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { WidgetsGridComponent } from './widgets-grid.component';
import { NgGridModule } from 'angular2-grid';

import { DemoComponentsModule } from '../../demo-components/demo-components.module';
import { ComponentFactoryModule } from "../component-factory/component-factory.module";


@NgModule({
  imports: [CommonModule, SharedModule, NgGridModule, DemoComponentsModule, ComponentFactoryModule],
  declarations: [WidgetsGridComponent],
  exports: [WidgetsGridComponent]
})
export class WidgetsGridModule {
}
