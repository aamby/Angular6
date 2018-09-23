import { BadRequestError } from './../../common/bad-request-error';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { NotFoundError } from './../../common/not-found-error';
import { AppError } from './../../common/app-error';

@Injectable({
    providedIn: 'root'
  })
export class DataService {

    constructor(private http: Http) { }

    baseUrl:string = "https://bbrest.herokuapp.com/";

    //apiUrl = "api/ingredientcontrols/getall"
    protected getAll(apiUrl){
        let auth = JSON.parse(localStorage.getItem('auth'));

        let headers = new Headers({ 
            'Content-Type': 'application/json' ,
            'Authorization': auth.token});
        let options = new RequestOptions({ headers: headers });

        let url:string =this.baseUrl + apiUrl;
        return this.http.post(url, null, options)
        .map(response => response.json())
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