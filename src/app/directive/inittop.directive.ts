import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInittop]',
  standalone: true
})
export class InittopDirective {

  constructor(private el: ElementRef) { }

  @HostListener("click") onClick(){
    console.log(this.el.nativeElement.offsetTop);
  }

}
