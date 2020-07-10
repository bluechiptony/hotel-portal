import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSaleComponent } from './bar-sale.component';

describe('BarSaleComponent', () => {
  let component: BarSaleComponent;
  let fixture: ComponentFixture<BarSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
