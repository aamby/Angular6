import { BadRequestError } from './../../common/bad-request-error';
import { NotFoundError } from './../../common/not-found-error';
import { AppError } from './../../common/app-error';
import { AuthService } from './../services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthService) { }

  ngOnInit() {
  }

  username:string;
  pwd:string;
  @Input('is-visible') isVisible:boolean = true;
  @Output('on-login-clicked') click = new EventEmitter();
  
  onLoginClicked(){
    let loginResult = {} as loginResult;

    let loginInput = {
      username: this.username,
      pwd: this.pwd
    }

    this.service.doLogin({login:loginInput})
    .subscribe(response => {   
      let result = response.json();
      loginResult.isLoggedIn = result.isSuccess;
      loginResult.msg = result.message;
      loginResult.token = response.headers.get("Authorization");
      loginResult.userName = result.records.username;

      localStorage.setItem('auth', JSON.stringify(loginResult));

      this.username = '';
      this.pwd = '';

      this.click.emit({newValue:loginResult});
    }, (error: AppError) => {
        if(error instanceof NotFoundError){
          alert('Invalid username or password!');
          console.log('Invalid username or password!');
        }else if(error instanceof BadRequestError){
          alert('Invalid Input!');
          console.log('Invalid Input!');
        }else{
          throw error;
        }
    });
  }

}

export interface loginResult{
  isLoggedIn: boolean,
  msg: string,
  token: string,
  userName: string
}

export interface loginClickedEventArgs{
  newValue: loginResult
}