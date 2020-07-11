import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleComponent } from './sale.component';
import { SaleTotalComponent } from './sale-total/sale-total.component';

const routes: Routes = [
  { path: '', component: SaleTotalComponent },
  { path: 'total', component: SaleTotalComponent },
  { path: 'bar', component: SaleComponent },
  { path: 'laundry', component: SaleComponent },
  { path: 'new-sale', component: SaleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleRoutingModule {}
