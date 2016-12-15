import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WidgetsManagerModule } from '../../widgets-manager.module';
import { WidgetComponentsModule } from './demo/widgets/widget-components.module';
import { WidgetsManagerService } from '../../widgets-manager.service';
import {WidgetsPipeModule} from './demo/widgets-pipe/widgets-pipe.module';

@NgModule({
  imports: [BrowserModule, HttpModule, SharedModule.forRoot(), WidgetsManagerModule.forRoot(), WidgetsPipeModule, WidgetComponentsModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    WidgetsManagerService.provideWidgetsModule(WidgetComponentsModule.forRoot());
  }
}
