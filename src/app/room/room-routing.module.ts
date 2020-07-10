import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomComponent } from './room.component';
import { RoomCategoriesComponent } from './room-categories/room-categories.component';
import { NewRoomComponent } from './new-room/new-room.component';
import { NewRoomCategoryComponent } from './new-room-category/new-room-category.component';
import { RoomSettingsComponent } from './room-settings/room-settings.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
  },
  {
    path: 'room-settings',
    component: RoomSettingsComponent,
  },
  {
    path: 'categories',
    component: RoomCategoriesComponent,
  },
  {
    path: 'new-room',
    component: NewRoomComponent,
  },

  {
    path: 'new-room-category',
    component: NewRoomCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomRoutingModule {}
