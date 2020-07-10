import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryTableComponent } from './inventory-table.component';
import { MatDependencyModule } from 'src/app/shared/mat-dependency/mat-dependency.module';

@NgModule({
  declarations: [InventoryTableComponent],
  imports: [CommonModule, MatDependencyModule],
  exports: [InventoryTableComponent],
})
export class InventoryTableModule {}
