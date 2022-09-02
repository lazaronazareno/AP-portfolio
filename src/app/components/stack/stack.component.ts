import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileComponent } from '../profile/profile.component';
@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
  providers : [ProfileComponent]
})
export class StackComponent implements OnInit {
  data:any;
  @Input() profileData:any;
  isUserAuth : boolean = false;

  constructor(private portfolioService: PortfolioService, private authUser: AuthService) {
   }

  ngOnInit(): void {
    if(this.authUser.UserAuthenticated && this.authUser.UserAuthenticated.token) { this.isUserAuth = true}
    this.portfolioService.getStack()
    .subscribe(data => (
      this.data = data
    ))
  }

}
