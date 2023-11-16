import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  // @Input({ required: true }) name!: string;
}
