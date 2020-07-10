import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCollectionComponent } from './room-collection.component';

describe('RoomCollectionComponent', () => {
  let component: RoomCollectionComponent;
  let fixture: ComponentFixture<RoomCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
