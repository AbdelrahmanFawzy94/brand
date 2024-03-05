import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// TODO remove and put it in app module if we can
import { HttpClientModule } from '@angular/common/http';

import { SamplesRoutingModule } from './samples-routing.module';
import { SamplesComponent } from './samples.component';

import { SharedDashboardComponent } from '@shared';

@NgModule({
  declarations: [SamplesComponent],
  imports: [CommonModule, SamplesRoutingModule, SharedDashboardComponent, HttpClientModule],
  providers: [],
})
export class SamplesModule {}
