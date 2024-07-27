export interface IFilterationResoursesItem {
  id: number;
  key: string;
  text: string;
  languageName: string;
  localizationLanguageId: number;
  version: string;
  resourceType: number;
  localizationCulture: string;
  createdAt: string;
}

export interface IGetFilteredResourcesResponse {
  items: IFilterationResoursesItem[];
  totalItems: number;
}
