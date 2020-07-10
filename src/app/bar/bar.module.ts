import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarRoutingModule } from './bar-routing.module';
import { BarComponent } from './bar.component';
import { BarSaleComponent } from './bar-sale/bar-sale.component';
import { InventoryCollectionModule } from '../collections/inventory-collection/inventory-collection.module';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryTableModule } from '../tables/inventory-table/inventory-table.module';
import { NewItemComponent } from './new-item/new-item.component';

@NgModule({
  declarations: [BarComponent, BarSaleComponent, InventoryComponent, NewItemComponent],
  imports: [
    CommonModule,
    BarRoutingModule,
    InventoryCollectionModule,
    InventoryTableModule,
  ],
})
export class BarModule {}
