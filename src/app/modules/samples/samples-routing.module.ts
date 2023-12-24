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
          title: 'samples_colors',
          preload: true,
        },
        loadComponent: () => import('./views/colors/colors.component'),
      },
      {
        path: 'typo',
        data: {
          title: 'samples_typography',
          preload: true,
        },
        loadComponent: () => import('./views/typo/typo.component'),
      },
      {
        path: 'screens',
        data: {
          title: 'samples_screens',
          preload: true,
        },
        loadComponent: () => import('./views/screens/screens.component'),
      },
      {
        path: 'borders',
        data: {
          title: 'samples_borders',
          preload: true,
        },
        loadComponent: () => import('./views/borders/borders.component'),
      },
      {
        path: 'input-form',
        data: {
          title: 'samples_input',
          preload: true,
        },
        loadComponent: () => import('./views/input-form/input-form.component'),
      },
      {
        path: 'textarea-form',
        data: {
          title: 'samples_textarea',
          preload: true,
        },
        loadComponent: () => import('./views/textarea-form/textarea-form.component'),
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
