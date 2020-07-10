import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCategoryCollectionComponent } from './room-category-collection.component';

describe('RoomCategoryCollectionComponent', () => {
  let component: RoomCategoryCollectionComponent;
  let fixture: ComponentFixture<RoomCategoryCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomCategoryCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCategoryCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
