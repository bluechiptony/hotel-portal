import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room.component';
import { RoomCategoriesComponent } from './room-categories/room-categories.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomRoutingModule } from './room-routing.module';
import { NewRoomsComponent } from '../rooms/new-rooms/new-rooms.component';
import { NewRoomComponent } from './new-room/new-room.component';
import { NewRoomCategoryComponent } from './new-room-category/new-room-category.component';
import { RoomSettingsComponent } from './room-settings/room-settings.component';
import { FormDependencyModule } from '../shared/form-dependency/form-dependency.module';
import { RoomCategoryCollectionModule } from '../collections/room-category-collection/room-category-collection.module';
import { RoomCollectionModule } from '../collections/room-collection/room-collection.module';

@NgModule({
  declarations: [
    RoomComponent,
    RoomCategoriesComponent,
    RoomsComponent,
    NewRoomsComponent,
    NewRoomComponent,
    NewRoomCategoryComponent,
    RoomSettingsComponent,
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    FormDependencyModule,
    RoomCategoryCollectionModule,
    RoomCollectionModule,
  ],
})
export class RoomModule {}
