import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  // encapsulation: ViewEncapsulation.Emulated,
})

export class CoursesComponent implements OnInit {

  constructor(service: CoursesService) { 
    this.courses = service.getCourses();
  }

  ngOnInit() {
  }

  isActive = false;
  name='Ambarish';
  longText = 'jhasj ajshgfdjhas dasfhj asjfdjhsfd sjhdfsajhd jhsafdjhsafd jsahdhas djhsagadj sajhdgjhsdg jsgd jsagd jasgdj sagdjhasg djhsag djhg sajhdgjsag djhasg djgas djajshdg ahjgsd agsd';

  private title = 'My current courses';
  private courses:any[];

  getTitle(){
    return this.title;
  }

  getCourses(){
    return this.courses;
  }

  onSave(){
    console.log("Save button is clicked of Courses component.")
  }

  onCancel($event){
    $event.stopPropagation();
    console.log("Cancel button is clicked of Courses component. Dom event object:", $event);
  }

  onKeyUp1(email){
    console.log("key up event is fired on courses component for the key: Enter", email);
  }

  onKeyUp(){
    console.log("key up event is fired on courses component for the key: Enter", this.name);
  }

  onFavouriteChange(e){
    console.log(e);
    console.log("Course favourite changed.", this.courses);
  }
}
