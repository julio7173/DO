import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input() appHighlight = "";

  @HostListener("mouseup") onMouseUp(){
    this.highlightText(this.appHighlight || "white");
  }

  private highlightText(color: string){
    const selection = window.getSelection();
    if(selection && selection.rangeCount > 0){
      const range = selection.getRangeAt(0);
      const span = document.createElement("span");
      span.style.backgroundColor = color;
      span.style.borderRadius = "5px";
      range.surroundContents(span);
    }
  }

}
