import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  data : any;
  github = faGithub;
  linkedin = faLinkedin;
  isUserAuth : boolean = false;

  constructor(private portfolioService: PortfolioService, private authUser: AuthService) { }

  ngOnInit(): void {
    if(this.authUser.UserAuthenticated && this.authUser.UserAuthenticated.token) { this.isUserAuth = true}
    console.log(this.isUserAuth)
    this.portfolioService.getData()
    .subscribe(data => (
      console.log(data),
      this.data = data
    ))
  }

}
