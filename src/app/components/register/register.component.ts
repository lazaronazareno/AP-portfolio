import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private authService:AuthService, private route:Router) {
    this.registerForm=this.formBuilder.group(
      {
        email:['', [Validators.required, Validators.email]],
        password:['', [Validators.required, Validators.minLength(8)]],
        confirmPassword:['', [Validators.required, Validators.minLength(8)]],
      }
    )
   }

  ngOnInit(): void {
  }

  onPasswordChange() {
    if (this.ConfirmPassword.value == this.Password.value) {
      this.ConfirmPassword.setErrors(null);
    } else {
      this.ConfirmPassword.setErrors({ mismatch: true });
    }
  }

  onSend(event:Event){
    event.preventDefault;
    this.authService.Register(this.registerForm.value.email, this.registerForm.value.password).subscribe(data=>{
      console.log('data :' + JSON.stringify(data));
      this.route.navigate(['/login']);
    })
  }

  get Email() {
    return this.registerForm.get('email');
  }

  get Password(): AbstractControl {
    return this.registerForm.controls['password'];
  }
  
  get ConfirmPassword(): AbstractControl {
    return this.registerForm.controls['confirmPassword'];
  }

}
