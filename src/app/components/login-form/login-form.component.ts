import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form:FormGroup;
  error: HttpErrorResponse | undefined;
  response : string | undefined;
  loading : boolean = false;

  constructor(private formBuilder:FormBuilder, private authService:AuthService, private route:Router) {
    this.form=this.formBuilder.group(
      {
        email:['', [Validators.required, Validators.email]],
        password:['', [Validators.required, Validators.minLength(8)]],
      }
    )
   }

  ngOnInit(): void {
  }

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password')
  }

  onSend(event:Event){
    event.preventDefault;
    this.authService.Login(this.form.value.email, this.form.value.password)
    .pipe(catchError(() => {
      return throwError(() => new Error('Oops! Algo ha salido mal'))
    }))
    .subscribe({
      next : (data) => {
        console.log('data :' + JSON.stringify(data));
        this.loading = true
        this.route.navigate(['/portfolio']).then(() => {
          window.location.reload()
        });
      },
      error: (error) => {
        console.log('oops', error)
        this.error = error;
      },
      complete: () => {
        this.loading = false
      }
    })
  }

  onClick(){
    this.route.navigate(['/register'])
  }

}
