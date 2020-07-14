import { Component, OnInit, Input } from '@angular/core';
import { User } from 'hotel-lib';

@Component({
  selector: 'app-user-collection-item',
  templateUrl: './user-collection-item.component.html',
  styleUrls: ['./user-collection-item.component.scss'],
})
export class UserCollectionItemComponent implements OnInit {
  @Input('user') user: User;
  constructor() {}

  ngOnInit(): void {}
}
