import { Component, NgModule } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import {} from 'jasmine';

import { WidgetsGridComponent } from './widgets-grid.component';
import { WidgetsManagerService } from '../widgets-manager.service';
import { WidgetsGridModule } from './widgets-grid.module';
import { ComponentDetails } from "./component-details.model";

describe('WidgetsGridComponent', () => {
	let componentDetailsGenerator = (id: any, html: string) => {
		return <ComponentDetails>{
			gridItemConfig: {
				sizex: 2,
				sizey: 1,
				fixed: true
			},
			id: id,
			name: 'Demo1',
			html: html
		}
	};

	describe('WidgetsGridComponent components insertion', () => {
		beforeEach(() => {
			TestBed.configureTestingModule({
				imports: [WidgetsGridModule],
				declarations: [SimpleComponent],
			});
		});

		it('Should handle 1 simple component', async(() => {
			TestBed.compileComponents().then(() => {
				// Arrange
				let fixture = TestBed.createComponent(SimpleComponent);
				let widgetsGridComponent: WidgetsGridComponent = fixture.debugElement.children[0].componentInstance;
				let widgetsGridDOMElement = fixture.debugElement.children[0].nativeElement;

				WidgetsManagerService.provideWidgetsModule(MockModule);

				widgetsGridComponent.componentsDetails = [];
				widgetsGridComponent.componentsDetails.push(componentDetailsGenerator(1, '<div>Test</div>'));

				// Act
				fixture.detectChanges();

				// Assert
				expect(widgetsGridDOMElement.querySelectorAll('component-factory').length).toEqual(1);

				WidgetsManagerService.widgetsModule = undefined;
			});
		}));

		it('Should handle more than 1 simple components', async(() => {
			TestBed.compileComponents().then(() => {
				// Arrange
				let fixture = TestBed.createComponent(SimpleComponent);
				let widgetsGridComponent: WidgetsGridComponent = fixture.debugElement.children[0].componentInstance;
				let widgetsGridDOMElement = fixture.debugElement.children[0].nativeElement;

				WidgetsManagerService.provideWidgetsModule(MockModule);

				widgetsGridComponent.componentsDetails.push(componentDetailsGenerator(1, '<div>Test1</div>'));
				widgetsGridComponent.componentsDetails.push(componentDetailsGenerator(2, '<div>Test2</div>'));

				// Act
				fixture.detectChanges();

				// Assert
				expect(widgetsGridDOMElement.querySelectorAll('component-factory').length).toEqual(2);

				WidgetsManagerService.widgetsModule = undefined;
			});
		}));

		it('Should contain the same HTML passed to the component', async(() => {
			TestBed.compileComponents().then(() => {
				// Arrange
				let fixture = TestBed.createComponent(SimpleComponent);
				let widgetsGridComponent: WidgetsGridComponent = fixture.debugElement.children[0].componentInstance;
				let widgetsGridDOMElement = fixture.debugElement.children[0].nativeElement;

				WidgetsManagerService.provideWidgetsModule(MockModule);

				widgetsGridComponent.componentsDetails = [];
				widgetsGridComponent.componentsDetails.push(componentDetailsGenerator(1, '<div>Test1</div>'));

				// Act
				fixture.detectChanges();

				// Assert
				let componentFactory = widgetsGridDOMElement.querySelectorAll('component-factory')[0];
				expect(componentFactory.getAttribute('ng-reflect-html')).toEqual(widgetsGridComponent.componentsDetails[0].html);

				WidgetsManagerService.widgetsModule = undefined;
			});
		}));
	});
});

@Component({
	selector: 'test-cmp',
	template: '<widgets-grid></widgets-grid>'
})
class SimpleComponent {
}

@NgModule({
	imports: [CommonModule],
})
class MockModule {
}