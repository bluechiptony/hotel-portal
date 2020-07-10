import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryCollectionComponent } from './inventory-collection.component';
import { InventoryCollectionItemComponent } from './inventory-collection-item/inventory-collection-item.component';

@NgModule({
  declarations: [InventoryCollectionComponent, InventoryCollectionItemComponent],
  imports: [CommonModule],
  exports: [InventoryCollectionComponent],
})
export class InventoryCollectionModule {}
