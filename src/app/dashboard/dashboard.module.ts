import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { MatMenuModule } from '@angular/material/menu';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BarModule } from '../bar/bar.module';
import { AuthorizationIterceptorProviders } from '../services/interceptors';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { AppService } from '../services/app.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatMenuModule,
    AccordionModule.forRoot(),
    BarModule,
    HttpClientModule,
  ],

  providers: [AuthorizationIterceptorProviders, UserService, AppService],
})
export class DashboardModule {}
