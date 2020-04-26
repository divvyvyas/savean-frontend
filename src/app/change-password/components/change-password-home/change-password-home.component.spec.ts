import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordHomeComponent } from './change-password-home.component';

describe('ChangePasswordHomeComponent', () => {
  let component: ChangePasswordHomeComponent;
  let fixture: ComponentFixture<ChangePasswordHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswordHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
