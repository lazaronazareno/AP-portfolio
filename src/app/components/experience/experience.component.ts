import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { AuthService } from 'src/app/services/auth.service';
import { Experience } from 'src/app/porfolio-models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() profileData :any;
  data : any;
  isUserAuth : boolean = false;
  response: string | undefined;
  error : string | undefined;

  constructor(
    private portfolioService: PortfolioService, private authUser: AuthService, private router:Router
  ) {
   }

  ngOnInit(): void {
    if(this.authUser.UserAuthenticated && this.authUser.UserAuthenticated.token) { this.isUserAuth = true}
    this.portfolioService.getExperience()
    .subscribe(data => (
      this.data = data
    ))
  }

  onDelete(experience : Experience) {
    this.portfolioService.deleteExperience(experience).subscribe({
      next : (data) => {
        console.log('experience deleted', data);
        this.response = data;
        this.router.navigate([], {
          skipLocationChange: true,
          queryParamsHandling: 'merge'
        })
      },
      error: (error) => {
        console.log('experience deleted failed', error);
        this.error = error;
        this.router.navigate([], {
          skipLocationChange: true,
          queryParamsHandling: 'merge'
        })
      }
    })
  }

}
