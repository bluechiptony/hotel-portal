import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCategoriesComponent } from './room-categories.component';

describe('RoomCategoriesComponent', () => {
  let component: RoomCategoriesComponent;
  let fixture: ComponentFixture<RoomCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
