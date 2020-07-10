import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCollectionItemComponent } from './room-collection-item.component';

describe('RoomCollectionItemComponent', () => {
  let component: RoomCollectionItemComponent;
  let fixture: ComponentFixture<RoomCollectionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomCollectionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCollectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
