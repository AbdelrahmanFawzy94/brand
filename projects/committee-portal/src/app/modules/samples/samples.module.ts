import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// TODO remove and put it in app module if we can
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { SamplesRoutingModule } from './samples-routing.module';
import { SamplesComponent } from './samples.component';
import { SharedDashboardComponent } from '@library';

@NgModule({ declarations: [SamplesComponent], imports: [CommonModule, SamplesRoutingModule, SharedDashboardComponent], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class SamplesModule {}
