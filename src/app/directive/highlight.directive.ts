import { Directive, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { MyCommentComponent } from '../components/my-comment/my-comment.component';
import { CommentService } from '../services/comment.service';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(
    private el: ElementRef,
    private comment: CommentService,
  ) { }

  @Input() appHighlight = "";
  @ViewChild("textMark") textMark!:ElementRef;

  count = 0;

  @HostListener("mouseup") onMouseUp(){
    this.highlightText(this.appHighlight || "white");
  }

  private highlightText(color: string){
    const selection = window.getSelection();
    const span = document.createElement("span");
    let selectedText = "";
    if(selection && selection.rangeCount > 0){
      const range = selection.getRangeAt(0);
      selectedText = range.toString();
      if(selectedText.trim() === ""){
        return;
      }
      const commonAncestor = range.commonAncestorContainer;
      if(commonAncestor.nodeType === Node.ELEMENT_NODE && (commonAncestor as Element).closest("span")){
        return;
      }
      console.log(selectedText);
      range.surroundContents(span);
    }
    span.style.backgroundColor = color;
    span.style.borderRadius = "5px";
    span.setAttribute("id", "textMark-"+this.count);
    this.count += 1;
    const top = span.getBoundingClientRect().top;
    const height = span.getBoundingClientRect().height;
    this.comment.add(top, height, selectedText);
  }

}
