import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { AuthService } from 'src/app/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Person } from 'src/app/porfolio-models';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  profileData! : Person;
  error! : HttpErrorResponse;
  isUserAuth : boolean = false;
  loading : boolean = true;

  constructor(private portfolioService: PortfolioService, private authUser: AuthService) { }

  ngOnInit(): void {
    if(this.authUser.UserAuthenticated && this.authUser.UserAuthenticated.token) { this.isUserAuth = true}
    this.portfolioService.getProfile()
    .subscribe({
      next: data => {
      this.profileData = data,
      this.loading = false
      },
      error: error => {
        console.log(error)
        this.error = error
      },
    })
  }
}
