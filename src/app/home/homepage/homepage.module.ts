import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { HomepageComponent } from './homepage.component';
import { AuthorsService } from './services/authors.service';
import { CoursesService } from './services/courses.service';
//import { SharedModule } from '../shared/shared.module';
import { StarComponent } from '../shared/star/star.component';
import { InputFormatDirective } from '../shared/directives/input-format/input-format.directive';
import { SummaryPipe } from '../shared/pipes/summary.pipe';
import { TitleCasePipe } from './../shared/pipes/title-case.pipe';

@NgModule({
  declarations: [
    HomepageComponent,
    AuthorsComponent,
    CoursesComponent,
    StarComponent,
    InputFormatDirective,
    SummaryPipe,
    TitleCasePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    //SharedModule
  ],
  providers: [
    AuthorsService,
    CoursesService,
  ],
  bootstrap: [HomepageComponent]
})
export class HomepageModule {}
