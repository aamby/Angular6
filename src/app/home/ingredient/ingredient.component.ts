import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ingredient-container',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log('ingredient component is loaded');
  }
  
}
