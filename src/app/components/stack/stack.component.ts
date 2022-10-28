import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileComponent } from '../profile/profile.component';
import { Person, Stack } from 'src/app/porfolio-models';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
  providers : [ProfileComponent]
})
export class StackComponent implements OnInit {
  data! : Stack[];
  @Input() profileData! : Person;
  isUserAuth : boolean = false;
  loading : boolean = false;
  response: string | undefined;
  error : HttpErrorResponse | undefined;

  constructor(private portfolioService: PortfolioService, private authUser: AuthService, private router:Router) {
   }

  ngOnInit(): void {
    if(this.authUser.UserAuthenticated && this.authUser.UserAuthenticated.token) { this.isUserAuth = true}
    this.portfolioService.getStack()
    .subscribe(data => (
      this.data = data
    ))
  }

  onDelete(stack : Stack) {
    this.loading = true;
    this.portfolioService.deleteStack(stack).subscribe({
      next : (data) => {
        this.response = data;
        this.loading = false
        this.router.navigate(['/']).then(() => {
          window.location.reload()
        });
      },
      error: (error) => {
        this.error = error;
        this.loading = false
      }
    })
  }

}
