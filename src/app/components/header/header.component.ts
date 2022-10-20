import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser, faCode, faBriefcase, faBook, faDisplay, faHouse, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  home = faHouse;
  user = faUser;
  code = faCode;
  briefcase = faBriefcase;
  book = faBook;
  display = faDisplay;
  bars = faBars;
  close = faXmark;
  isUserAuth : boolean = false;


  constructor(private authService:AuthService, private router:Router) { }

  isShowDivIf = true;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }

  handleLogout() {
    this.authService.Logout();
    window.location.reload()
  }

  ngOnInit(): void {
    if(this.authService.UserAuthenticated && this.authService.UserAuthenticated.token) {
      this.isUserAuth = true
     }
  }
}
