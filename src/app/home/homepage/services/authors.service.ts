import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAuthors(){
    return [{name:'Mosh', isFavourite: true},{name:'Mark', isFavourite: false},{name:'Peter', isFavourite: false},{name:'Dan', isFavourite: false}];
  }
}
