import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { AuthService } from 'src/app/services/auth.service';
import { Experience, Person } from 'src/app/porfolio-models';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() profileData! : Person;
  data! : Experience[];
  isUserAuth : boolean = false;
  response: string | undefined;
  error : HttpErrorResponse | undefined;
  loading : boolean = false;

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
    this.loading = true;
    this.portfolioService.deleteExperience(experience).subscribe({
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
