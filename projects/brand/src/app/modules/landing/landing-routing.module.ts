import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LandingComponent } from './landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        data: {
          preload: true,
        },
        loadComponent: () => import('./views/home/home.component'),
      },
      // {
      //   path: 'signup',
      //   data: {
      //     preload: true,
      //   },
      //   loadChildren: () =>
      //     import('./signup/signup.module').then((m) => m.SignUpModule),
      // },
      // {
      //   path: 'profile',
      //   data: {
      //     preload: true,
      //   },
      //   loadChildren: () =>
      //     import('./login/login.module').then((m) => m.LoginModule),
      //   // canLoad: [LoginGuard],
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
