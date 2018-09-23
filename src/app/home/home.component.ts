import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  auth;

  ngOnInit() {}

  ngAfterContentChecked(){
    if (localStorage.length == 0) {
      this.router.navigate(['/']);
    }
    else{
      if(localStorage.getItem('auth') == undefined || localStorage.getItem('auth') == null){
        this.router.navigate(['/']);
      }
      else{
        this.auth = JSON.parse(localStorage.getItem('auth'));
      }
    }
  }
}
