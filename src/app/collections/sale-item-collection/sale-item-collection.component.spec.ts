import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleItemCollectionComponent } from './sale-item-collection.component';

describe('SaleItemCollectionComponent', () => {
  let component: SaleItemCollectionComponent;
  let fixture: ComponentFixture<SaleItemCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleItemCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleItemCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
