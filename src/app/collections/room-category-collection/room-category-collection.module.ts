import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomCategoryCollectionComponent } from './room-category-collection.component';
import { RoomCategoryCollectionItemComponent } from './room-category-collection-item/room-category-collection-item.component';
import { MatDependencyModule } from 'src/app/shared/mat-dependency/mat-dependency.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RoomCategoryCollectionComponent,
    RoomCategoryCollectionItemComponent,
  ],
  imports: [CommonModule, MatDependencyModule, RouterModule],
  exports: [
    RoomCategoryCollectionComponent,
    RoomCategoryCollectionItemComponent,
  ],
})
export class RoomCategoryCollectionModule {}
