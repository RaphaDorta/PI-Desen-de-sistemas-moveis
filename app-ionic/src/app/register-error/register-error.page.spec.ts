import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterErrorPage } from './register-error.page';

describe('RegisterErrorPage', () => {
  let component: RegisterErrorPage;
  let fixture: ComponentFixture<RegisterErrorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
