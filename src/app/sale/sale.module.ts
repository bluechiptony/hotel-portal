import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { SaleComponent } from './sale.component';
import { SaleTotalComponent } from './sale-total/sale-total.component';
import { RouterModule } from '@angular/router';
import { SaleSummaryTableModule } from '../tables/sale-summary-table/sale-summary-table.module';
import { SaleTableModule } from '../tables/sale-table/sale-table.module';
import { NewSaleComponent } from './new-sale/new-sale.component';

@NgModule({
  declarations: [SaleComponent, SaleTotalComponent, NewSaleComponent],
  imports: [
    CommonModule,
    SaleRoutingModule,
    RouterModule,
    SaleTableModule,
    SaleSummaryTableModule,
  ],
})
export class SaleModule {}
