import { Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { MatAccordionTogglePosition, MatExpansionModule } from '@angular/material/expansion';
import { SharedIconButtonComponent } from '../icon-button/icon-button.component'; // TODO
import { TranslateModule } from '@ngx-translate/core';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { SharedIconComponent } from '@library';

interface AccordionData {
  header: TemplateRef<any>;
  body: TemplateRef<any>;
  disabled?: boolean;
  expanded?: boolean;
  hideToggleIcon?: boolean;
  toggleIconPosition?: MatAccordionTogglePosition;
  collapsedHeaderHeight?: string;
  expandedHeaderHeight?: string;
}

interface AccordionClick {
  data: AccordionData;
  index: number;
}

@Component({
  selector: 'lib-accordion',
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet, TranslateModule, SharedIconButtonComponent, MatExpansionModule, SharedIconComponent],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SharedAccordionComponent {
  // @ViewChild('accordion', { static: true }) accordion!: MatAccordion;
  // accordion = viewChild.required(MatAccordion);

  @Input({ required: true }) accordions!: AccordionData[];
  @Input() toggleIconPosition: MatAccordionTogglePosition = 'after';
  @Input() expandOnlyOne: boolean = false;
  @Input() hideToggleIcon: boolean = false;

  @Output() onAccordionCollapse = new EventEmitter<AccordionClick>();
  @Output() onAccordionExpand = new EventEmitter<AccordionClick>();

  constructor() {}

  accordionCollpase(data: AccordionClick) {
    this.onAccordionCollapse.emit(data);
  }
  accordionExpand(data: AccordionClick) {
    this.onAccordionExpand.emit(data);
  }
}
