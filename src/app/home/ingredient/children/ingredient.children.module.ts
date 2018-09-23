import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IngredientsService } from './services/ingredients.service';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { IngredientNewComponent } from './ingredient-new/ingredient-new.component';
import { IngredientEditComponent } from './ingredient-edit/ingredient-edit.component';
import { IngredientChildrenRoutingModule } from './ingredient-children-routing.module';

@NgModule({
  declarations: [
    IngredientListComponent,
    IngredientNewComponent,
    IngredientEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    IngredientChildrenRoutingModule
  ],
  providers: [
    IngredientsService
  ],
})
export class IngredientChildrenModule {}
