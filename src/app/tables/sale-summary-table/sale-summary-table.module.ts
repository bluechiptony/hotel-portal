import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleSummaryTableComponent } from './sale-summary-table.component';
import { MatDependencyModule } from 'src/app/shared/mat-dependency/mat-dependency.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SaleSummaryTableComponent],
  imports: [CommonModule, MatDependencyModule, RouterModule],
  exports: [SaleSummaryTableComponent],
})
export class SaleSummaryTableModule {}
