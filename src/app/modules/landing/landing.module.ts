import { NgModule } from '@angular/core';

import { LandingRoutingModule } from './landing-routing.module';

import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, LandingRoutingModule],
  providers: [],
})
export class LandingModule {}
