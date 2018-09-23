import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  constructor() { }

  getFollowers(page, order){
    setTimeout(1000, ()=>{
      return [{name:'Angular', isFavourite: true},{name:'React', isFavourite: false},{name:'NodeJs', isFavourite: true},{name:'MongoDB', isFavourite: false}];
    })
  }
}
