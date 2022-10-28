import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { AuthService } from 'src/app/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  profileData : any;
  error : HttpErrorResponse | undefined;
  isUserAuth : boolean = false;
  loading : boolean = true;

  constructor(private portfolioService: PortfolioService, private authUser: AuthService) { }

  ngOnInit(): void {
    if(this.authUser.UserAuthenticated && this.authUser.UserAuthenticated.token) { this.isUserAuth = true}
    this.portfolioService.getProfile()
    .subscribe({
      next: data => {
      this.profileData = data,
      this.loading = false,
      this.error = undefined
      },
      error: error => {
        this.error = error
      },
    })
  }
}
