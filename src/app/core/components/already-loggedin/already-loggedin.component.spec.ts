import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyLoggedinComponent } from './already-loggedin.component';

describe('AlreadyLoggedinComponent', () => {
  let component: AlreadyLoggedinComponent;
  let fixture: ComponentFixture<AlreadyLoggedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlreadyLoggedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadyLoggedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
