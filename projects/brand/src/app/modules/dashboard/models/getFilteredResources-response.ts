export interface FilterationResoursesItem {
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
  items: FilterationResoursesItem[];
  totalItems: number;
}
