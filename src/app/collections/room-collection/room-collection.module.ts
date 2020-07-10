import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomCollectionComponent } from './room-collection.component';
import { RoomCollectionItemComponent } from './room-collection-item/room-collection-item.component';
import { MatDependencyModule } from 'src/app/shared/mat-dependency/mat-dependency.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RoomCollectionComponent, RoomCollectionItemComponent],
  imports: [CommonModule, MatDependencyModule, RouterModule],
  exports: [RoomCollectionComponent, RoomCollectionItemComponent],
})
export class RoomCollectionModule {}
