import { Component, OnInit, Input } from '@angular/core';
import { RoomCategory } from 'hotel-lib';

@Component({
  selector: 'app-user-collection-item',
  templateUrl: './user-collection-item.component.html',
  styleUrls: ['./user-collection-item.component.scss'],
})
export class UserCollectionItemComponent implements OnInit {
  @Input('roomCategory') roomCategory: RoomCategory;
  constructor() {}

  ngOnInit(): void {}
}
