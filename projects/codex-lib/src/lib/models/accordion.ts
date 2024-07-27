import { TemplateRef } from '@angular/core';
import { MatAccordionTogglePosition } from '@angular/material/expansion';

export interface IAccordionData {
  header?: TemplateRef<any>;
  body: TemplateRef<any>;
  disabled?: boolean;
  expanded?: boolean;
  hideToggleIcon?: boolean;
  toggleIconPosition?: MatAccordionTogglePosition;
  collapsedHeaderHeight?: string;
  expandedHeaderHeight?: string;
}

export interface IAccordionClick {
  data: IAccordionData;
  index: number;
}
