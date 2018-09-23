import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private element : ElementRef) { }

  @Input('appInputFormat') format;

  @HostListener('focus') onFocus(){
    console.log('on focus is called');
  }

  @HostListener('blur') onBlur(){
    console.log('on blur is called');
    let value:string = this.element.nativeElement.value;
    if(this.format == 'uppercase')
      this.element.nativeElement.value = value.toUpperCase();
    else
      this.element.nativeElement.value = value.toLowerCase();
  }

}
