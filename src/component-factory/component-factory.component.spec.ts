import { Component, Input, NgModule } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import {} from 'jasmine';

import { ComponentFactoryModule } from './component-factory.module';
import { WidgetsManagerService } from '../widgets-manager.service';
import { HtmlOutlet } from './component-factory.component';

describe('ComponentFactoryDirective', () => {
	describe('ComponentFactoryDirective components insertion', () => {
		beforeEach(() => {
			TestBed.configureTestingModule({
				imports: [ComponentFactoryModule],
				declarations: [FactoryComponentMock, SimpleComponentMock],
			});
		});

		it('Should handle simple component', async(() => {
			TestBed.compileComponents().then(() => {
				// Arrange
				let fixture = TestBed.createComponent(FactoryComponentMock);
				let htmlOutletComponent: HtmlOutlet = fixture.debugElement.children[0].componentInstance;
				let htmlOutletDOMElement = fixture.debugElement.children[0].nativeElement;

				WidgetsManagerService.provideWidgetsModule(MockModule);

				htmlOutletComponent.html = '<div>Test</div>';

				// Act
				fixture.detectChanges();

				// Assert
				expect(htmlOutletDOMElement.getAttribute('ng-reflect-html')).toEqual(htmlOutletComponent.html);

				WidgetsManagerService.widgetsModule = undefined;
			});
		}));

		it('Should handle a component containing angular2 logic', async(() => {
			TestBed.compileComponents().then(() => {
				// Arrange
				let fixture = TestBed.createComponent(FactoryComponentMock);
				let htmlOutletComponent: HtmlOutlet = fixture.debugElement.children[0].componentInstance;
				let htmlOutletDOMElement = fixture.debugElement.children[0].nativeElement;

				let simpleComponentFixture = TestBed.createComponent(SimpleComponentMock);
				let simpleComponent: SimpleComponentMock = simpleComponentFixture.componentInstance;

				simpleComponent.something = 'hi';

				WidgetsManagerService.provideWidgetsModule(MockModule);

				htmlOutletComponent.html = '<simple-component></simple-component>';

				// Act
				fixture.detectChanges();

				// Assert
				expect(htmlOutletDOMElement.getAttribute('ng-reflect-html')).toEqual('<div>hi</div>');

				WidgetsManagerService.widgetsModule = undefined;
			});
		}));
	});
});

@Component({
	selector: 'test-cmp',
	template: '<component-factory></component-factory>'
})
class FactoryComponentMock {
}

@NgModule({
	imports: [CommonModule],
})
class MockModule {
}

@Component({
	selector: 'simple-component',
	template: '<div>{{something}}</div>'
})
class SimpleComponentMock {
	@Input() something: string;
}