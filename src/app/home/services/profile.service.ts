import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(id: number): IProfile{
    return {name:'Ambarish', email: 'aamby2006@gmail.com'};
  }
}

export interface IProfile{
  name:string, 
  email:string
}
