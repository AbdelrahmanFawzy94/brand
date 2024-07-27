import { TemplateRef } from '@angular/core';

export interface ITableColumn {
  key: string;
  headerTranslationKey: string;
  template?: TemplateRef<any>;
  columnClass?: string;
}
