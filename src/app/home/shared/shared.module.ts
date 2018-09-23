import { StarComponent } from './star/star.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFormatDirective } from './directives/input-format/input-format.directive';
import { SummaryPipe } from './pipes/summary.pipe';
import { TitleCasePipe } from './pipes/title-case.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    StarComponent,
    InputFormatDirective,
    SummaryPipe,
    TitleCasePipe
  ]
})
export class SharedModule { }
