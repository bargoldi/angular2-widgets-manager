import { Injectable } from "@angular/core";

@Injectable()
export class WidgetsManagerService {
  static modulePath = '';

  static provideModulePath(modulePath: string) {
    WidgetsManagerService.modulePath = modulePath;
  }
}
