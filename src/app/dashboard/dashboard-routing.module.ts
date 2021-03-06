import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../overview/overview.module').then((m) => m.OverviewModule),
      },
      {
        path: 'rooms',
        loadChildren: () =>
          import('../room/room.module').then((m) => m.RoomModule),
      },
      {
        path: 'bar',
        loadChildren: () =>
          import('../bar/bar.module').then((m) => m.BarModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'sales',
        loadChildren: () =>
          import('../sale/sale.module').then((m) => m.SaleModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
