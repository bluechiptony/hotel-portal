import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleSummaryTableComponent } from './sale-summary-table.component';

describe('SaleSummaryTableComponent', () => {
  let component: SaleSummaryTableComponent;
  let fixture: ComponentFixture<SaleSummaryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleSummaryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleSummaryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
