import { Component, OnInit, Input } from '@angular/core';
import { RoomCategory } from 'hotel-lib';

@Component({
  selector: 'app-room-collection-item',
  templateUrl: './room-collection-item.component.html',
  styleUrls: ['./room-collection-item.component.scss'],
})
export class RoomCollectionItemComponent implements OnInit {
  @Input('roomCategory') roomCategory: RoomCategory;

  constructor() {}

  ngOnInit(): void {}
}
