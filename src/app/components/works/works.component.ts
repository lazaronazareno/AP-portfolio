import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  @Input() profileData :any;
  data : any;
  isUserAuth : boolean = false;

  constructor(
    private portfolioService: PortfolioService, private authUser: AuthService
  ) { }

  ngOnInit(): void {
    if(this.authUser.UserAuthenticated && this.authUser.UserAuthenticated.token) { this.isUserAuth = true}
    this.portfolioService.getProyect()
    .subscribe(data => (
      this.data = data
    ))
  }
}
