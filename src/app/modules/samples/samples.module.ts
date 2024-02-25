import { NgModule } from '@angular/core';

import { SamplesRoutingModule } from './samples-routing.module';

import { CommonModule } from '@angular/common';
import { SamplesComponent } from './samples.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedDashboardComponent } from '@shared';

@NgModule({
  declarations: [SamplesComponent],
  imports: [CommonModule, SamplesRoutingModule, SharedDashboardComponent, HttpClientModule],
  providers: [],
})
export class SamplesModule {}
