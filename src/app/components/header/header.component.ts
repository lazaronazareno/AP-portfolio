import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser, faCode, faBriefcase, faBook, faDisplay, faHouse, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

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


  constructor(private router:Router) { }

  isShowDivIf = true;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }

  ngOnInit(): void {
  }
}
