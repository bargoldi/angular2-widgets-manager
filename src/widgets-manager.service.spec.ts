import { NgModule } from '@angular/core';
import {} from 'jasmine';
import * as TypeMoq from 'typemoq';

import { WidgetsManagerService } from './widgets-manager.service';

describe('WidgetsManagerService', () => {
	describe('WidgetsManagerService widgets module initialization', () => {
		it('provideWidgetsModule should set the module', () => {
			let someModule: TypeMoq.IMock<NgModule> = TypeMoq.Mock.ofType(NgModule);
			WidgetsManagerService.provideWidgetsModule(someModule);
			expect(WidgetsManagerService.widgetsModule).toBe(someModule);

			WidgetsManagerService.widgetsModule = undefined;
		});
	});
});
