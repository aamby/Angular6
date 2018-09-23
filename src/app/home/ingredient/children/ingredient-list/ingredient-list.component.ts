import { Component, OnInit, OnDestroy } from '@angular/core';
import { IngredientsService, IIngredient } from '../services/ingredients.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppError } from '../../../../common/app-error';
import { NotFoundError } from '../../../../common/not-found-error';
import { BadRequestError } from '../../../../common/bad-request-error';

@Component({
  selector: 'ing-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit, OnDestroy {
  
  ingredients:IIngredient[];
  private subscriptions = [];

  constructor(private router: Router, private service: IngredientsService) {}

  ngOnInit() {
    console.log('ingredient list component is loaded');
    this.subscriptions.push(
      this.service.getIngredients()
      .subscribe(ingrdnts => this.ingredients = ingrdnts.records   
      , (error: AppError) => {
        if(error instanceof NotFoundError){
          //this.form.setErrors(error.json());
          alert('No records found!');
          console.log('No records found!');
        }else if(error instanceof BadRequestError){
          //this.form.setErrors(error.originalError);
          alert('Invalid Input!');
          console.log('Invalid Input!');
        }else{
          throw error;
        }
    })
    );
  }

  ngOnDestroy(){
    for(let subscription of this.subscriptions){
      subscription.unsubscribe();
    }
}

  onDeleteClicked(id){
    alert('Record will be deleted');
  }

  onEditClicked(id){
    this.router.navigate(['/app/ingredient/children/edit']);
  }

  onCreateNewClicked(){
    this.router.navigate(['/app/ingredient/children/create']);
  }
}
