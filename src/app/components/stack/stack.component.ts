import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {
  data:any;

  constructor(private portfolioService: PortfolioService) {
   }

  ngOnInit(): void {
    this.portfolioService.getData()
    .subscribe(data => (
      this.data = data
    ))
  }

}
