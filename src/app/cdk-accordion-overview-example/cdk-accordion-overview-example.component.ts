import {Component} from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';

/**
 * @title Accordion overview
 */
@Component({
  selector: 'cdk-accordion-overview-example',
  standalone :true,
  templateUrl: 'cdk-accordion-overview-example.component.html',
  styleUrl: 'cdk-accordion-overview-example.component.css',
  imports: [CdkAccordionModule],
})
export class CdkAccordionOverviewExample {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */