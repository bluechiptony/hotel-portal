import { Component, OnInit, Input } from '@angular/core';
import { RoomCategory } from 'hotel-lib';

@Component({
  selector: 'app-room-category-collection-item',
  templateUrl: './room-category-collection-item.component.html',
  styleUrls: ['./room-category-collection-item.component.scss'],
})
export class RoomCategoryCollectionItemComponent implements OnInit {
  @Input('roomCategory') roomCategory: RoomCategory;

  constructor() {}

  ngOnInit(): void {}
}
