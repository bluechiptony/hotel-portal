import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCollectionComponent } from './inventory-collection.component';

describe('InventoryCollectionComponent', () => {
  let component: InventoryCollectionComponent;
  let fixture: ComponentFixture<InventoryCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
