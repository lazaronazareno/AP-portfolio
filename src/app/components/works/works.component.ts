import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { AuthService } from 'src/app/services/auth.service';
import { Proyect } from 'src/app/porfolio-models';
import { Router } from '@angular/router';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  @Input() profileData :any;
  data : any;
  github = faGithub;
  deploy = faDesktop;
  isUserAuth : boolean = false;
  response: string | undefined;
  error : HttpErrorResponse | undefined;
  loading : boolean = false;

  constructor(
    private portfolioService: PortfolioService, private authUser: AuthService, private router:Router
  ) { }

  ngOnInit(): void {
    if(this.authUser.UserAuthenticated && this.authUser.UserAuthenticated.token) { this.isUserAuth = true}
    this.portfolioService.getProyect()
    .subscribe(data => (
      this.data = data
    ))
  }

  onDelete(proyect : Proyect) {
    this.loading = true;
    this.portfolioService.deleteProyect(proyect).subscribe({
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
