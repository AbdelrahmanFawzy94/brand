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
        path: 'select-form',
        data: {
          title: 'samples_input',
          preload: true,
        },
        loadComponent: () => import('./views/select-form/select-form.component'),
      },
      {
        path: 'textarea-form',
        data: {
          title: 'samples_textarea',
          preload: true,
        },
        loadComponent: () => import('./views/textarea-form/textarea-form.component'),
      },
      {
        path: 'checkbox-form',
        data: {
          title: 'samples_checkbox',
          preload: true,
        },
        loadComponent: () => import('./views/checkbox-form/checkbox-form.component'),
      },
      {
        path: 'radio-buttons-form',
        data: {
          title: 'samples_radio-buttons',
          preload: true,
        },
        loadComponent: () => import('./views/radio-buttons-form/radio-buttons-form.component'),
      },
      {
        path: 'datepicker-form',
        data: {
          title: 'samples-datepicker-form',
          preload: true,
        },
        loadComponent: () => import('./views/datepicker-form/datepicker-form.component'),
      },
      {
        path: 'range-form',
        data: {
          title: 'samples-range-form',
          preload: true,
        },
        loadComponent: () => import('./views/range-form/range-form.component'),
      },
      {
        path: 'slide-toggle-form',
        data: {
          title: 'samples-slide-toggle-form',
          preload: true,
        },
        loadComponent: () => import('./views/slide-toggle-form/slide-toggle-form.component'),
      },
      {
        path: 'buttons',
        data: {
          title: 'samples-buttons',
          preload: true,
        },
        loadComponent: () => import('./views/buttons/buttons.component'),
      },
      {
        path: 'tables',
        data: {
          title: 'samples-tables',
          preload: true,
        },
        loadComponent: () => import('./views/tables/tables.component'),
      },
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
