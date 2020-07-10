import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCategoryCollectionItemComponent } from './room-category-collection-item.component';

describe('RoomCategoryCollectionItemComponent', () => {
  let component: RoomCategoryCollectionItemComponent;
  let fixture: ComponentFixture<RoomCategoryCollectionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomCategoryCollectionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCategoryCollectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
