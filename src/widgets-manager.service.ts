import { Injectable, ModuleWithProviders, NgModule } from '@angular/core';

@Injectable()
export class WidgetsManagerService {
  static widgetsModule: NgModule | ModuleWithProviders | NgModule[] | ModuleWithProviders[];

  static provideWidgetsModule(widgetsModule: NgModule | ModuleWithProviders | NgModule[] | ModuleWithProviders[]) {
    WidgetsManagerService.widgetsModule = widgetsModule;
  }
}
