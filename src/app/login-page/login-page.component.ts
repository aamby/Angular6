import { loginResult, loginClickedEventArgs } from './login/login.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'loginpage',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  isLoggedIn:boolean = false;

  ngOnInit() {
  }

  onLoginClicked(e:loginClickedEventArgs){
    let loginResult:loginResult = e.newValue;
    if(loginResult.isLoggedIn)
      this.router.navigate(['/app']);
  }
}
