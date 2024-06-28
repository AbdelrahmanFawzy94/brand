import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        data: {
          preload: true,
        },
        loadComponent: () => import('./views/landing/landing.component'),
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
export class DashboardRoutingModule {}
