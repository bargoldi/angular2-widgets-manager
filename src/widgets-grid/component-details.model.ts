import { NgGridItemConfig } from 'angular2-grid';

export interface ComponentDetails {
  id?: string|number;
  name: string;
  html: string;
  gridItemConfig: NgGridItemConfig;
}
