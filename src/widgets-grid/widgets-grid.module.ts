import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgGridModule } from 'angular2-grid';
import { WidgetsGridComponent } from './widgets-grid.component';
import { ComponentFactoryModule } from '../component-factory/component-factory.module';

@NgModule({
	imports: [NgGridModule, ComponentFactoryModule, CommonModule],
	declarations: [WidgetsGridComponent],
	exports: [WidgetsGridComponent, NgGridModule]
})
export class WidgetsGridModule {
}
