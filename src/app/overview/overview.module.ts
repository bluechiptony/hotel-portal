import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { FunctionOverviewComponent } from './function-overview/function-overview.component';
import { SalesOverviewComponent } from './sales-overview/sales-overview.component';
import { RoomOverviewComponent } from './room-overview/room-overview.component';


@NgModule({
  declarations: [OverviewComponent, FunctionOverviewComponent, SalesOverviewComponent, RoomOverviewComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule
  ]
})
export class OverviewModule { }
