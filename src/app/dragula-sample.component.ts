/*
 * the most basic example working with Dragula
 * copied from the docs
 */
import { Component } from '@angular/core';

import { DragulaService } from 'ng2-dragula'

@Component({
  selector: 'dragula-sample',
  styleUrls: ['./dragula-sample.component.css'],
  templateUrl: './dragula-sample.component.html'
})
export class DragulaSampleComponent {

  constructor(private dragulaService: DragulaService) {
    dragulaService.drag.subscribe((value) => {
      console.log(value);
    });
    dragulaService.drop.subscribe((value) => {
      console.log(value);
    })
  }

  items: string[] = [
    'A',
    'B',
    'C',
    'D'
  ]

}
