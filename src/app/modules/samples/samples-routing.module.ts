import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SamplesComponent } from './samples.component';

const routes: Routes = [
  {
    path: '',
    component: SamplesComponent,
    children: [
      {
        path: 'colors',
        data: {
          title: 'colors',
          preload: true,
        },
        loadComponent: () => import('./views/colors/colors.component'),
      },
      {
        path: 'typo',
        data: {
          title: 'typography',
          preload: true,
        },
        loadComponent: () => import('./views/typo/typo.component'),
      },
      {
        path: 'screens',
        data: {
          title: 'screens',
          preload: true,
        },
        loadComponent: () => import('./views/screens/screens.component'),
      },
      {
        path: 'borders',
        data: {
          title: 'borders',
          preload: true,
        },
        loadComponent: () => import('./views/borders/borders.component'),
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
export class SamplesRoutingModule {}
