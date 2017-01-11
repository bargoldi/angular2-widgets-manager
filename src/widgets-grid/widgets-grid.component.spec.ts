import { Component, NgModule } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import {} from 'jasmine';
import * as TypeMoq from 'typemoq';

import { WidgetsGridComponent } from './widgets-grid.component';
import { WidgetsManagerService } from '../widgets-manager.service';
import { WidgetsGridModule } from './widgets-grid.module';
import { ComponentDetails } from "./component-details.model";

describe('WidgetsGridComponent', () => {
	describe('WidgetsGridComponent components insertion', () => {
		beforeEach(() => {
			TestBed.configureTestingModule({
				imports: [WidgetsGridModule],
				declarations: [TestComponent],
			});
		});

		it('Should handle 1 simple component', async(() => {
			TestBed.compileComponents().then(() => {
				// Arrange
				let fixture = TestBed.createComponent(TestComponent);
				let widgetsGridComponent: WidgetsGridComponent = fixture.debugElement.children[0].componentInstance;
				let widgetsGridDOMElement = fixture.debugElement.children[0].nativeElement;

				let someModule: TypeMoq.IMock<NgModule> = TypeMoq.Mock.ofType(NgModule);
				WidgetsManagerService.provideWidgetsModule(someModule);

				widgetsGridComponent.componentsDetails = [<ComponentDetails>{
					gridItemConfig: {
						sizex: 2,
						sizey: 1,
						fixed: true
					},
					id: 1,
					name: 'Demo1',
					html: '<div>Test</div>'
				}];

				// Act
				fixture.detectChanges();

				// Assert
				expect(widgetsGridDOMElement.querySelectorAll('component-factory').length).toEqual(0);

				WidgetsManagerService.widgetsModule = undefined;
			});
		}));
	});
});

@Component({
	selector: 'test-cmp',
	template: '<widgets-grid></widgets-grid>'
})
class TestComponent {
}
