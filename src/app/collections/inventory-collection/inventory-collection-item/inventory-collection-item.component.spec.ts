import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCollectionItemComponent } from './inventory-collection-item.component';

describe('InventoryCollectionItemComponent', () => {
  let component: InventoryCollectionItemComponent;
  let fixture: ComponentFixture<InventoryCollectionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryCollectionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryCollectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
