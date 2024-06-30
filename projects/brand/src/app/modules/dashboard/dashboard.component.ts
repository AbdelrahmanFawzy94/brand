import { Component } from '@angular/core';
import { DashboardDropDowns } from '@library';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  menu: DashboardDropDowns[] = [
    {
      id: '213',
      nameEn: 'localization',
      nameAr: 'الترجمة',
      icon: 'language_chinese_dayi',
      routing: 'localization',
      subDropdowns: [],
      badgeData: 1,
    },
  ];
  constructor() {}
}
