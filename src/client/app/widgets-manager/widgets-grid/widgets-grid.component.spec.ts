import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  async
} from '@angular/core/testing';
import {
  BaseRequestOptions
} from '@angular/http';
import { CommonModule } from '@angular/common';

import { MockBackend } from '@angular/http/testing';
import { WidgetsGridComponent } from './widgets-grid.component';

import { WidgetsGridModule } from './widgets-grid.module';
import { ComponentDetails } from "./component-details.model";

export function main() {
  describe('WidgetsGridComponent', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, WidgetsGridModule],
        declarations: [TestComponent],
        providers: [
          BaseRequestOptions,
          MockBackend,
          {
            deps: [MockBackend, BaseRequestOptions]
          },
        ]
      });
    });

    it('Should work', async(() => {
      TestBed
        .compileComponents()
        .then(() => {
          let fixture = TestBed.createComponent(TestComponent);
          let widgetsGridComponent: WidgetsGridComponent = fixture.debugElement.children[0].componentInstance;
          let widgetsGridDOMElement = fixture.debugElement.children[0].nativeElement;

          expect(widgetsGridDOMElement.querySelectorAll('li').length).toEqual(0);

          widgetsGridComponent.componentsDetails = [<ComponentDetails>{
            gridItemConfig: {
              sizex: 2,
              sizey: 1,
              fixed: true
            },
            id: 1,
            name: 'Demo1',
            html: '<widget-1></widget-1>'
          }];

          fixture.detectChanges();

          expect(widgetsGridDOMElement.querySelectorAll('component-factory').length).toEqual(1);
        });
    }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<widgets-grid></widgets-grid>'
})
class TestComponent {
}
