import { NgModule } from '@angular/core';
import { WidgetsManagerService } from './widgets-manager.service';

import * as TypeMoq from 'typemoq';

export function main() {
  describe('WidgetsManagerService', () => {
    it('provideWidgetsModule should set the module', () => {
      let someModule: TypeMoq.IMock<NgModule> = TypeMoq.Mock.ofType(NgModule);
      WidgetsManagerService.provideWidgetsModule(someModule);
      expect(WidgetsManagerService.widgetsModule).toBe(someModule);

      WidgetsManagerService.widgetsModule = undefined;
    })
  });
}
