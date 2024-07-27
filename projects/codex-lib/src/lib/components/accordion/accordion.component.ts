import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { MatAccordion, MatAccordionTogglePosition, MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { IAccordionClick, IAccordionData, SharedIconComponent, SharedIconButtonComponent } from '@library';

@Component({
  selector: 'lib-accordion',
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet, TranslateModule, SharedIconButtonComponent, MatExpansionModule, SharedIconComponent],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SharedAccordionComponent implements AfterViewInit {
  @ViewChild(MatAccordion, { static: true }) accordion!: MatAccordion;
  @ViewChildren(MatExpansionPanel) expansionPanels!: QueryList<MatExpansionPanel>;

  @Input({ required: true }) accordions!: IAccordionData[];
  @Input() toggleIconPosition: MatAccordionTogglePosition = 'after';
  @Input() expandOnlyOne: boolean = false;
  @Input() hideToggleIcon: boolean = false;

  @Output() onAccordionCollapse = new EventEmitter<IAccordionClick>();
  @Output() onAccordionExpand = new EventEmitter<IAccordionClick>();

  constructor() {}

  ngAfterViewInit(): void {
    // console.warn(this.expansionPanels.get(0));
    // this.expansionPanels.forEach((i) => console.warn(i));
  }

  accordionCollpaseOutput(data: IAccordionClick) {
    this.onAccordionCollapse.emit(data);
  }
  accordionExpandOutput(data: IAccordionClick) {
    this.onAccordionExpand.emit(data);
  }

  //

  expandAccordion(accordionIndex: number) {
    this.expansionPanels.get(accordionIndex)!.open();
  }

  collapseAccordion(accordionIndex: number) {
    this.expansionPanels.get(accordionIndex)!.close();
  }

  toggle(accordionIndex: number) {
    this.expansionPanels.get(accordionIndex)!.toggle();
  }

  expandAll() {
    this.accordion.openAll();
  }

  collapseAll() {
    this.accordion.closeAll();
  }
}
