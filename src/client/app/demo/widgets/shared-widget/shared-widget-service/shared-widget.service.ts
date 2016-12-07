import { Injectable } from '@angular/core';

@Injectable()
export class SharedWidgetService {
  public students:any[] = [
    {
      name: 'something1',
      number: 111
    },
    {
      name: 'something2',
      number: 222
    },
    {
      name: 'something3',
      number: 333
    }
  ];

  constructor() {
  }
}
