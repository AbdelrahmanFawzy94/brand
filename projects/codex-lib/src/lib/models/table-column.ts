import { TemplateRef } from '@angular/core';

export interface TableColumn {
  key: string;
  headerTranslationKey: string;
  template?: TemplateRef<any>;
  columnClass?: string;
}
