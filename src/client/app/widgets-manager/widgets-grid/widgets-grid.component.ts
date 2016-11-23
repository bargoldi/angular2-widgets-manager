import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  Input,
  ViewContainerRef,
  ViewChild,
  ComponentFactory
} from '@angular/core';
import { NgGrid, NgGridItem } from 'angular2-grid';

/**
 * This class represents the lazy loaded WidgetsGridComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'widgets-grid',
  templateUrl: 'widgets-grid.component.html',
  styleUrls: ['widgets-grid.component.css'],
  directives: [NgGrid, NgGridItem]
})
export class WidgetsGridComponent implements OnInit {
  @Input() components: Array<string> = [];
  @Input() componentsOrder: Array<ComponentDetails> = [];

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  /**
   * Get the names OnInit
   */
  ngOnInit(): void {
    // this.components = this.components.map((component: string)=> {
    //   return this.camelCaseToKebab(component);
    // });
  }

  private camelCaseToKebab(camelizedString: string): string {
    return camelizedString.replace(/\W+/g, '-')
      .replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
  }
}

// let compFactory = this.componentFactoryResolver.resolveComponentFactory(Demo1Component);

//   let childComponent = this.componentFactoryResolver.resolveComponentFactory(Demo1Component);
//
//   this.parent.createComponent(childComponent);
// });

// this.container.createComponent(compFactory);
