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
    path: 'dashboard',
    data: {
      preload: true,
    },
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'samples',
    data: {
      preload: false,
    },
    loadChildren: () => import('./modules/samples/samples.module').then((m) => m.SamplesModule),
  },
  {
    path: 'login',
    data: {
      preload: true,
    },
    loadComponent: () => import('./pages/login/login.component'),
  },
  {
    path: '**',
    data: {
      preload: true,
    },
    loadComponent: () => import('./pages/not-found/not-found.component'),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      preloadingStrategy: CustomPreloadingService,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
