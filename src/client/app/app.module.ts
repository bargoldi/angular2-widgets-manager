import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgGridModule } from 'angular2-grid';
import { WidgetsGridModule } from './widgets-manager/widgets-grid/widgets-grid.module';
import { SharedModule } from './shared/shared.module';
import { WidgetsGridModule } from './widgets-manager/widgets-grid/widgets-grid.module';

@NgModule({
  imports: [BrowserModule, HttpModule, WidgetsGridModule, SharedModule.forRoot(), NgGridModule, WidgetsGridModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule {
}
