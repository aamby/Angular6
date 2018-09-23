import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService extends DataService {
    constructor(http: Http) { 
        super(http);
    }

    getIngredients(){
        const apiUrl = "api/ingredientcontrols/getall";
        return this.getAll(apiUrl);
    }
}

export interface IIngredient{
  id:number
  label:string, 
  type:string,
  rate:number,
  createdby:string,
  createdate:string
}
