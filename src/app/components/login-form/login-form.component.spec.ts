import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      imports:[ ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect form is valid', () => {
    fixture.nativeElement.querySelector('button').click();

    expect(component.login()).toEqual('invalid_form');
  });

  it('should validate correct user and password', () => {
    component.form = formBuilder.group({
      email: 'test@test.com',
      password: '123456'
    });
    fixture.nativeElement.querySelector('button').click();

    expect(component.login()).toEqual('login_valid');
  });

  it('should deny access with incorrect password', () => {
    component.form = formBuilder.group({
      email: 'test@test.com',
      password: '123'
    });
    fixture.nativeElement.querySelector('button').click();

    expect(component.login()).toEqual('login_invalid');
  });
});
