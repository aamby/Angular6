import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses(){
    return [{name:'Angular', isFavourite: true},{name:'React', isFavourite: false},{name:'NodeJs', isFavourite: true},{name:'MongoDB', isFavourite: false}];
  }
}
