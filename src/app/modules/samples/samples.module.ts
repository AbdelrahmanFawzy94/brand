import { NgModule } from '@angular/core';

import { SamplesRoutingModule } from './samples-routing.module';

import { CommonModule } from '@angular/common';
import { SamplesComponent } from './samples.component';

@NgModule({
  declarations: [SamplesComponent],
  imports: [CommonModule, SamplesRoutingModule],
  providers: [],
})
export class SamplesModule {}
