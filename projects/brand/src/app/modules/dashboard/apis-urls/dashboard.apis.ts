const localizationKey = 'Localization';
export class DashboardApiUrls {
  // localization
  static readonly getLanguages: string = `${localizationKey}/GetLanguages`;
  static readonly getSupportedDevices: string = `${localizationKey}/GetSupportedDevices`;
  static readonly getFilteredResources: string = `${localizationKey}/GetFilteredResources`;
  static readonly addResource: string = `${localizationKey}/AddResource`;
  static readonly editResource: string = `${localizationKey}/UpdateResource`;
  static readonly deleteResource: string = `${localizationKey}/DeleteResource`;
  static readonly getResources: string = `${localizationKey}/GetCachedResources`;
  //
}
