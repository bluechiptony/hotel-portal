import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryTableComponent } from './inventory-table.component';
import { MatDependencyModule } from 'src/app/shared/mat-dependency/mat-dependency.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InventoryTableComponent],
  imports: [CommonModule, MatDependencyModule, RouterModule],
  exports: [InventoryTableComponent],
})
export class InventoryTableModule {}
