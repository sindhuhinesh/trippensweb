import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  hideMobileMenu = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMobileMenuInNavbar(){
    this.hideMobileMenu = !this.hideMobileMenu;
  }

}
