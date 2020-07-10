import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarComponent } from './bar.component';

import { BarSaleComponent } from './bar-sale/bar-sale.component';
import { InventoryComponent } from './inventory/inventory.component';
import { NewItemComponent } from './new-item/new-item.component';

const routes: Routes = [
  { path: '', component: BarComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'inventory/new-item', component: NewItemComponent },
  { path: 'sale', component: BarSaleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarRoutingModule {}
