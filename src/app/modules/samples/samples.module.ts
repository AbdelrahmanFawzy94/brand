import { NgModule } from '@angular/core';

import { SamplesRoutingModule } from './samples-routing.module';

import { CommonModule } from '@angular/common';
import { SamplesComponent } from './samples.component';
import { DashboardComponent } from '@shared';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SamplesComponent],
  imports: [CommonModule, SamplesRoutingModule, DashboardComponent, HttpClientModule],
  providers: [],
})
export class SamplesModule {}
