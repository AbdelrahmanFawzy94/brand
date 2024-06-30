export interface IGetFilteredResourcesPayload {
  orderBy: string | null;
  sortDirection: string | null;
  pageNumber: number;
  pageSize: number;
  languageId: number;
  key: string | null;
  text: string | null;
  resourceType: number | null;
}
