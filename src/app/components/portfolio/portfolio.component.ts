import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  profileData : any;
  isUserAuth : boolean = false;

  constructor(private portfolioService: PortfolioService, private authUser: AuthService) { }

  ngOnInit(): void {
    if(this.authUser.UserAuthenticated && this.authUser.UserAuthenticated.token) { this.isUserAuth = true}
    this.portfolioService.getProfile()
    .subscribe(data => (
      console.log(data),
      this.profileData = data,
      console.log(this.profileData)
    ))
  }

}
