import { BadRequestError } from '../../common/bad-request-error';
import { NotFoundError } from '../../common/not-found-error';
import { AppError } from '../../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  private url:string ="https://bbrest.herokuapp.com/api/login";

  doLogin(login){
    return this.http.post(this.url, login)
    .catch(this.handleError);
  }

  private handleError(error: Response){
    if(error.status === 400)
    return Observable.throw(new BadRequestError(error.json()));
  else if(error.status === 404)
    return Observable.throw(new NotFoundError());
  else
    return Observable.throw(new AppError(error.json()));
  }
}
