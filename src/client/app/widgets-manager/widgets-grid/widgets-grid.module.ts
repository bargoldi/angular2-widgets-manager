import { NgModule } from '@angular/core';
import { WidgetsGridComponent } from './widgets-grid.component';
import { NgGridModule } from 'angular2-grid';
import { ComponentFactoryModule } from '../component-factory/component-factory.module';

@NgModule({
  imports: [NgGridModule, ComponentFactoryModule],
  declarations: [WidgetsGridComponent],
  exports: [WidgetsGridComponent, NgGridModule]
})
export class WidgetsGridModule {
}
