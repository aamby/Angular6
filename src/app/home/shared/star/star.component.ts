import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class StarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('is-favourite') isFavourite:boolean;
  @Output('on-favourite-change') change = new EventEmitter();
  
  onStarClick(){
    this.isFavourite = !this.isFavourite;
    this.change.emit({newValue:this.isFavourite});
  }
}


export interface FavouriteChangeEventArgs{
  newValue: boolean
}
