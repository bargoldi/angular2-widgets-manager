import { Injectable } from "@angular/core";
import { ComponentDetails } from "../../widgets-manager/widgets-grid/component-details.model";

@Injectable()
export class WidgetsDemoService {
  componentsDetails: Array<ComponentDetails> = [];

  public static id: number = 0;

  constructor() {
    WidgetsDemoService.id++;

    this.componentsDetails.push(<ComponentDetails>{
      gridItemConfig: {
        sizex: 2,
        sizey: 1,
        fixed: true
      },
      id: WidgetsDemoService.id,
      name: 'Demo1',
      html: '<section style="float:left; height:50px; width:100%;"><widget-toolbar-demo [id]="' + WidgetsDemoService.id + '" (onRemove)="removeElement(id)"></widget-toolbar-demo></section><section style="float:left; height:50px; width:100%;"><demo-1></demo-1></section>'
    });

    WidgetsDemoService.id++;
    this.componentsDetails.push(<ComponentDetails>{
      gridItemConfig: {
        sizex: 1,
        sizey: 1
      },
      id: WidgetsDemoService.id,
      name: 'Demo2',
      html: '<section style="float:left; height:50px; width:100%;"><widget-toolbar-demo [id]="' + WidgetsDemoService.id + '" (onRemove)="removeElement(id)"></widget-toolbar-demo></section><section style="float:left; height:50px; width:100%;"><demo-2></demo-2></section>'
    });

    let interval = setInterval(()=> {
      WidgetsDemoService.id++;

      this.componentsDetails.push(<ComponentDetails>{
        gridItemConfig: {
          sizex: 1,
          sizey: 1
        },
        id: WidgetsDemoService.id,
        name: 'Demo2',
        html: '<section style="float:left; height:50px; width:100%;"><widget-toolbar-demo [id]="' + WidgetsDemoService.id + '" (onRemove)="removeElement(id)"></widget-toolbar-demo></section><section style="float:left; height:50px; width:100%;"><demo-2></demo-2></section>'
      });

      if(WidgetsDemoService.id === 6){
        window.clearInterval(interval);
      }
    }, 3000);
  }

  removeElement(id: any) {
    this.componentsDetails = this.componentsDetails.filter((componentDetails)=> {
      return componentDetails.id !== id;
    })
  }
}
