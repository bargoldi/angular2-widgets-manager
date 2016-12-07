import { Injectable } from "@angular/core";
import { ComponentDetails } from "../../widgets-manager/widgets-grid/component-details.model";

@Injectable()
export class WidgetsDetailsService {
  componentsDetails:Array<ComponentDetails> = [];

  public static id:number = 0;

  constructor() {
    WidgetsDetailsService.id++;

    this.componentsDetails.push(<ComponentDetails>{
      gridItemConfig: {
        sizex: 2,
        sizey: 1,
        fixed: true
      },
      id: WidgetsDetailsService.id,
      name: 'Demo1',
      html: '<section style="float:left; height:50px; width:100%;"><widget-toolbar-demo [id]="' + WidgetsDetailsService.id + '" (onRemove)="removeElement(id)"></widget-toolbar-demo></section><section style="float:left; height:50px; width:100%;"><widget-1></widget-1></section>'
    });

    WidgetsDetailsService.id++;
    this.componentsDetails.push(<ComponentDetails>{
      gridItemConfig: {
        sizex: 1,
        sizey: 1
      },
      id: WidgetsDetailsService.id,
      name: 'Demo2',
      html: '<section style="float:left; height:50px; width:100%;"><widget-toolbar-demo [id]="' + WidgetsDetailsService.id + '" (onRemove)="removeElement(id)"></widget-toolbar-demo></section><section style="float:left; height:50px; width:100%;"><widget-2></widget-2></section>'
    });

    let interval = setInterval(() => {
      WidgetsDetailsService.id++;

      this.componentsDetails.push(<ComponentDetails>{
        gridItemConfig: {
          sizex: 1,
          sizey: 1
        },
        id: WidgetsDetailsService.id,
        name: 'Demo2',
        html: '<section style="float:left; height:50px; width:100%;"><widget-toolbar-demo [id]="' + WidgetsDetailsService.id + '" (onRemove)="removeElement(id)"></widget-toolbar-demo></section><section style="float:left; height:50px; width:100%;"><widget-2></widget-2></section>'
      });

      if (WidgetsDetailsService.id === 6) {
        clearInterval(interval);
      }
    }, 3000);
  }

  removeElement(id:any) {
    this.componentsDetails = this.componentsDetails.filter((componentDetails) => {
      return componentDetails.id !== id;
    })
  }
}
