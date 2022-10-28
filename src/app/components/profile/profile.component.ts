import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Person } from 'src/app/porfolio-models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnChanges {
  @Input() profileData! : Person;
  data! : Person;
  github = faGithub;
  linkedin = faLinkedin;
  isUserAuth : boolean = false;

  constructor(private portfolioService: PortfolioService, private authUser: AuthService) { }

  ngOnInit(): void {
    if(this.authUser.UserAuthenticated && this.authUser.UserAuthenticated.token) {
       this.isUserAuth = true
       this.data = this.profileData;
      }
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.data = this.profileData;
  }

}
