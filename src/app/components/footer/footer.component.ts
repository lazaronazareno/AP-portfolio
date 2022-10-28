import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  data : any;
  error : HttpErrorResponse | undefined;
  github = faGithub;
  linkedin = faLinkedin;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe({
      next : (data) => {
        this.data = data;
      },
      error: (error) => {
        this.error = error;
      }
    })
  }
}
