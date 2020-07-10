import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    CdkTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTabsModule,
  ],
  exports: [
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    CdkTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTabsModule,
  ],
})
export class MatDependencyModule {}
