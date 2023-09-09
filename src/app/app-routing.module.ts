import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      preload: false,
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
      preload: true,
    },
    loadComponent: () => import('./pages/not-found/not-found.component'),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
