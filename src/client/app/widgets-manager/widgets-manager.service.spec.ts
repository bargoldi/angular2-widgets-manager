import {Component, NgModule, ModuleWithProviders} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  async
} from '@angular/core/testing';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http, HttpModule
} from '@angular/http';
import {CommonModule} from '@angular/common';

import { MockBackend } from '@angular/http/testing';
import { WidgetsManagerService } from './widgets-manager.service';
import * as TypeMoq from 'typemoq';

import { WidgetsManagerModule } from './widgets-manager.module';

export function main() {
  describe('WidgetsManagerService', () => {
    it('provideWidgetsModule should set the module', () => {
      let someModule: TypeMoq.IMock<NgModule> = TypeMoq.Mock.ofType(NgModule);
      WidgetsManagerService.provideWidgetsModule(someModule);
      expect(WidgetsManagerService.widgetsModule).toBe(someModule);

      // let homeInstance = fixture.debugElement.children[0].componentInstance;
      // let homeDOMEl = fixture.debugElement.children[0].nativeElement;
      //
      // expect(homeDOMEl.querySelectorAll('li').length).toEqual(0);
      //
      // homeInstance.newName = 'Minko';
      // homeInstance.addName();
      //
      // fixture.detectChanges();
      //
      // expect(homeDOMEl.querySelectorAll('li').length).toEqual(1);
      // expect(homeDOMEl.querySelectorAll('li')[0].textContent).toEqual('Minko');
      // });
      //
      // }));
      // });
    })
  });
}

@Component({
  selector: 'test-cmp',
  template: '<widgets-grid></widgets-grid>'
})
class TestComponent { }
