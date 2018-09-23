import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepageModule } from './homepage/homepage.module';
import { homeRouteComponents, HomeRoutingModule } from './home-routing.module';
import { BreadcrumbComponent } from './core/breadcrumb/breadcrumb.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ProfileService } from './services/profile.service';
import { FollowersService } from './services/followers.service';

@NgModule({
  declarations: [
    ...homeRouteComponents,
    NavbarComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HomepageModule,
    HomeRoutingModule,
  ],
  providers: [
    ProfileService,
    FollowersService
  ],
})
export class HomeModule {}
