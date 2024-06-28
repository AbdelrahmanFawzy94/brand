import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedDashboardComponent } from '@library';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedDashboardComponent],
  providers: [],
})
export class DashboardModule {}
