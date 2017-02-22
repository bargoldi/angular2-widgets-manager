import { ModuleWithProviders, NgModule } from '@angular/core';
import { WidgetsGridModule } from './widgets-grid/widgets-grid.module';
import { WidgetsManagerService } from './widgets-manager.service';

@NgModule({
	imports: [WidgetsGridModule],
	providers: [WidgetsManagerService],
	exports: [WidgetsGridModule]
})
export class WidgetsManagerModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: WidgetsManagerModule
		};
	}
}

export * from 'angular2-grid';
export * from './widgets-grid/index';
export * from './component-factory/index';
export * from './widgets-manager.service';