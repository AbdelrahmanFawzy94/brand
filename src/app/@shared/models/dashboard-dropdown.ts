export interface DashboardDropDowns {
  id: string;
  nameEn: string;
  nameAr: string;
  icon: string;
  routing: string;
  subDropdowns: DashboardDropDowns[];
  badgeData: string | number;
}
