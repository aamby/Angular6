import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home.component';
import { IngredientComponent } from './ingredient/ingredient.component';

const homeRoutes: Routes = [
  {
    path: 'app', 
    component: HomeComponent,
    children: [
      {
        path: '', 
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home', 
        component: HomepageComponent,
      },
      {
        path: 'followers', 
        component: GithubFollowersComponent,
        pathMatch: 'full',
        data: {
          breadcrumb: "Github Followers"
        }
      },
      {
        path: 'profile/:id/:name', 
        component: GithubProfileComponent,
        data: {
          breadcrumb: "Github Profile"
        }
      },
      {
        path: 'posts', 
        component: PostsComponent,
        data: {
        breadcrumb: "Posts"
        }
      },
      {
        path: 'contact', 
        component: ContactFormComponent,
        data: {
          breadcrumb: "Contact"
        }
      },
      {
        path: 'customer', 
        component: CustomerComponent,
        data: {
          breadcrumb: "Customer"
        }
      },
      {
        path: 'ingredient', 
        component: IngredientComponent,
        children:[
          {
            path: 'children',
            loadChildren: 'src/app/home/ingredient/children/ingredient.children.module#IngredientChildrenModule'
          }
        ],
        data: {
          breadcrumb: "Ingredient"
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {}

export const homeRouteComponents = [
  HomeComponent,
  PostsComponent,
  GithubFollowersComponent,
  GithubProfileComponent,
  ContactFormComponent,
  CustomerComponent,
  IngredientComponent
];
