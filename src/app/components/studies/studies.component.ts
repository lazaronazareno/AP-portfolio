import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { AuthService } from 'src/app/services/auth.service';
import { Person, Study } from 'src/app/porfolio-models';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {
  @Input() profileData! : Person;
  data! : Study[];
  isUserAuth : boolean = false;
  response! : string ;
  error! : HttpErrorResponse;
  loading : boolean = false;

  constructor(
    private portfolioService: PortfolioService, private authUser: AuthService, private router:Router
  ) { }

  ngOnInit(): void {
    if(this.authUser.UserAuthenticated && this.authUser.UserAuthenticated.token) { this.isUserAuth = true}
    this.portfolioService.getStudy()
    .subscribe(data => (
      this.data = data
    ))
  }

  onDelete(study : Study) {
    this.loading = true;
    this.portfolioService.deleteStudy(study).subscribe({
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
