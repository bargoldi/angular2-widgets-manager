import { Pipe, PipeTransform } from '@angular/core';

import { ComponentDetails } from '../../widgets-manager/widgets-grid/component-details.model';

@Pipe({name: 'widgets'})
export class WidgetsPipe implements PipeTransform {
  transform(value: ComponentDetails[], name: string): ComponentDetails[] {
    if (name) {
      return value.filter((componentDetails: ComponentDetails)=> componentDetails.name.indexOf(name) >= 0);
    }

    return value;
  }
}
