import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleTotalComponent } from './sale-total.component';

describe('SaleTotalComponent', () => {
  let component: SaleTotalComponent;
  let fixture: ComponentFixture<SaleTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
