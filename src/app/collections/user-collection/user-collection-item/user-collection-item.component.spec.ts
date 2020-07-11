import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCollectionItemComponent } from './user-collection-item.component';

describe('UserCollectionItemComponent', () => {
  let component: UserCollectionItemComponent;
  let fixture: ComponentFixture<UserCollectionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCollectionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCollectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
