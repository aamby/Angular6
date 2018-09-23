import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  userName:string;
  toggleMenu:boolean;

  ngOnInit() {
    let initialLoggedInUser = JSON.parse(localStorage.getItem('auth'));
    this.userName = initialLoggedInUser.userName;
  }

  ngAfterContentChecked(){
    if (localStorage.length > 0) {
      let currentLoggedInUser = JSON.parse(localStorage.getItem('auth'));
      if(this.userName != currentLoggedInUser.userName){
        this.router.navigate(['/']);
      }
    }
  }

  onToggleMenu(){
    this.toggleMenu = !this.toggleMenu;
  }

  closeMenu(){
    this.toggleMenu = false;
  }

  onLogoutClicked(){
    this.closeMenu();
    this.userName = null;
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
