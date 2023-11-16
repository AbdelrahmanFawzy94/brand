import { NgModule } from '@angular/core';

import { SamplesRoutingModule } from './samples-routing.module';

import { CommonModule } from '@angular/common';
import { SamplesComponent } from './samples.component';
import { DashboardComponent } from '@shared';

@NgModule({
  declarations: [SamplesComponent],
  imports: [CommonModule, SamplesRoutingModule, DashboardComponent],
  providers: [],
})
export class SamplesModule {}
