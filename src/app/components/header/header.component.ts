import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToProfile() {
    this.router.navigate(['/', 'profile'])
  }

  goToExperience() {
    this.router.navigate(['/', 'experiences'])
  }

  goToAbilities() {
    this.router.navigate(['/', 'abilities'])
  }

  goToStudies() {
    this.router.navigate(['/', 'studies'])
  }

  goToWorks() {
    this.router.navigate(['/', 'works'])
  }

}
