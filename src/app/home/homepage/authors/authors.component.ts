import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthorsService } from '../services/authors.service';
import { FavouriteChangeEventArgs } from '../../shared/star/star.component';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  // encapsulation: ViewEncapsulation.Emulated,
})
export class AuthorsComponent implements OnInit {

  constructor(service: AuthorsService) {   
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

  isActive = true;

  name='Roy';
  longText = 'jhasj ajshgfdjhas dasfhj asjfdjhsfd sjhdfsajhd jhsafdjhsafd jsahdhas djhsagadj sajhdgjhsdg jsgd jsagd jasgdj sagdjhasg djhsag djhg sajhdgjsag djhasg djgas djajshdg ahjgsd agsd';
  
  private title = 'Authors of the courses';
  private authors:any[];

  getTitle(){
    return this.title;
  }

  getAuthors(){
    return this.authors;
  }

  onSave(){
    console.log("Save button is clicked of Authors component.");
  }

  onCancel($event){
    $event.stopPropagation();
    console.log("Cancel button is clicked of Authors component. Dom event object:", $event);
  }

  onKeyUp1(email){
    console.log("key up event is fired on authors component for the key: Enter", email);
  }

  onKeyUp(){
    console.log("key up event is fired on authors component for the key: Enter", this.name);
  }

  onFavouriteChange(eventArgs: FavouriteChangeEventArgs, item){
    this.authors.map(author=>{
      author.isFavourite = (author.name === item.name)? eventArgs.newValue : author.isFavourite;
    });
    console.log("Author favourite changed.", this.authors);
  }
}
