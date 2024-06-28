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
      nameEn: 'nameEn',
      nameAr: 'اسم عربي',
      icon: 'home',
      routing: '/dashboard',
      subDropdowns: [],
      badgeData: 1,
    },
  ];
  constructor() {}
}
