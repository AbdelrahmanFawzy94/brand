export interface IEditResourcePayload {
  id: number;
  key: string | null;
  text: string | null;
  localizationLanguageId: number | null;
  version: string | null;
  resourceType: string | null;
}
