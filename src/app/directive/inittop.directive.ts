import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInittop]',
  standalone: true
})
export class InittopDirective {

  constructor(private el: ElementRef) { }

  

}
