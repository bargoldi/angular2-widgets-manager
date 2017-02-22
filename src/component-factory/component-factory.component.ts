import {
	Compiler,
	Component,
	ComponentFactory,
	ComponentRef,
	Input,
	ModuleWithComponentFactories,
	NgModule,
	ReflectiveInjector,
	ViewContainerRef
} from '@angular/core';
import { RouterModule }  from '@angular/router';
import { CommonModule } from '@angular/common';

import { WidgetsManagerService } from '../widgets-manager.service';

export function createComponentFactory(compiler: Compiler, metadata: Component): Promise<ComponentFactory<any>> {
	class DynamicComponent {
	}

	let decoratedComponent = Component(metadata)(DynamicComponent);

	if (!WidgetsManagerService.widgetsModule) {
		throw new Error('NG2-WIDGETS-MANAGER: Widgets module should be provided');
	}

	@NgModule({
		imports: [CommonModule, RouterModule, WidgetsManagerService.widgetsModule],
		declarations: [decoratedComponent]
	})
	class DynamicHtmlModule {
	}

	return compiler.compileModuleAndAllComponentsAsync(DynamicHtmlModule)
		.then((moduleWithComponentFactory: ModuleWithComponentFactories<any>) => {
			return moduleWithComponentFactory.componentFactories.find(x => x.componentType === <any>decoratedComponent);
		});
}

@Component({selector: 'component-factory', template: ''})
export class HtmlOutlet {
	@Input() html: string;
	componentRef: ComponentRef<any>;

	constructor(private viewContainerRef: ViewContainerRef, private compiler: Compiler) {
	}

	ngOnChanges() {
		const html = this.html;
		if (!html) return;

		if (this.componentRef) {
			this.componentRef.destroy();
		}

		let compMetadata = new Component({
			selector: 'dynamic-html',
			template: this.html,
		});

		createComponentFactory(this.compiler, compMetadata)
			.then(factory => {
				const injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainerRef.parentInjector);
				this.componentRef = this.viewContainerRef.createComponent(factory, 0, injector, []);
			});
	}

	ngOnDestroy() {
		if (this.componentRef) {
			this.componentRef.destroy();
		}
	}
}
