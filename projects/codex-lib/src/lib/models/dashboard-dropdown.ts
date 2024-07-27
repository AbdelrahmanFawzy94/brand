export interface IDashboardDropDowns {
  id: string;
  nameEn: string;
  nameAr: string;
  icon: string;
  routing: string;
  subDropdowns: IDashboardDropDowns[];
  badgeData: string | number;
}
