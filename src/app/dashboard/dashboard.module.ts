import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { MatMenuModule } from '@angular/material/menu';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BarModule } from '../bar/bar.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatMenuModule,
    AccordionModule.forRoot(),
    BarModule,
  ],
})
export class DashboardModule {}
