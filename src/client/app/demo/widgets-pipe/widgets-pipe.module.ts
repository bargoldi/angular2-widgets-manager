import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {WidgetsPipe} from './widgets.pipe';

@NgModule({
  declarations: [WidgetsPipe],
  imports: [CommonModule],
  exports: [WidgetsPipe]
})

export class WidgetsPipeModule {
}
