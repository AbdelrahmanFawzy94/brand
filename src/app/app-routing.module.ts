import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPreloadingService } from './@core/services/custom-preloading.service';

const routes: Routes = [
  {
    path: '',
    data: {
      preload: true,
    },
    loadChildren: () => import('./modules/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'samples',
    data: {
      preload: false,
    },
    loadChildren: () => import('./modules/samples/samples.module').then((m) => m.SamplesModule),
  },
  {
    path: '**',
    data: {
      preload: false,
    },
    loadComponent: () => import('./pages/not-found/not-found.component'),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      preloadingStrategy: CustomPreloadingService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
