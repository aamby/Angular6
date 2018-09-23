import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: '', 
    component: LoginPageComponent
  },
  // {
  //   path: 'app', 
  //   loadChildren: 'src/app/home/home.module#HomeModule'
  // },
  {
    path: 'app', 
    redirectTo: '/app/home',
  },
  {
    path: '**', 
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}

export const appRouteComponents = [
  AppComponent,
  NotFoundComponent
];
