import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleTableComponent } from './sale-table.component';
import { MatDependencyModule } from 'src/app/shared/mat-dependency/mat-dependency.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SaleTableComponent],
  imports: [CommonModule, MatDependencyModule, RouterModule],
  exports: [SaleTableComponent],
})
export class SaleTableModule {}
