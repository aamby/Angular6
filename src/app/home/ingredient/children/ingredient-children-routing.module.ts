import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { IngredientEditComponent } from './ingredient-edit/ingredient-edit.component';
import { IngredientNewComponent } from './ingredient-new/ingredient-new.component';

const ingredientChildrenRoutes: Routes = [
  {
    path: '', 
    redirectTo: 'list',
  },
  {
    path: 'list', 
    component: IngredientListComponent,
    data: {
      breadcrumb: "List"
    }
  },
  {
    path: 'create', 
    component: IngredientNewComponent,
    data: {
      breadcrumb: "Add New"
    }
  },
  {
    path: 'edit', 
    component: IngredientEditComponent,
    data: {
      breadcrumb: "Edit"
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ingredientChildrenRoutes)
  ]
})
export class IngredientChildrenRoutingModule {}
