import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionOverviewComponent } from './function-overview.component';

describe('FunctionOverviewComponent', () => {
  let component: FunctionOverviewComponent;
  let fixture: ComponentFixture<FunctionOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
