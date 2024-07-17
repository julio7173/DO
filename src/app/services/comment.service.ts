import { ElementRef, HostListener, Injectable, Input, ViewChild } from '@angular/core';
import { Comment } from '../class/comment';
import { MyCommentComponent } from '../components/my-comment/my-comment.component';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comment: Comment[] = [];

  index = 0;

  constructor(private el: ElementRef) { }

  add(comment: string){
    const id = this.index;
    const newComment: Comment = new Comment(id, comment);
    this.comment.push(newComment);
    this.index += 1;
  }

  @Input() appHighlight = "";
  @ViewChild("textMark") textMark!:ElementRef;
  @ViewChild("textComment") textComment!:MyCommentComponent

  count = 0;
  top = 0;

  @HostListener("mouseup") onMouseUp(){
    this.highlightText(this.appHighlight || "white");
  }

  private highlightText(color: string){
    const selection = window.getSelection();
    const span = document.createElement("span");
    if(selection && selection.rangeCount > 0){
      const range = selection.getRangeAt(0);
      range.surroundContents(span);
    }
    span.style.backgroundColor = color;
    span.style.borderRadius = "5px";
    span.setAttribute("id", "textMark-"+this.count);
    this.count += 1;
    this.top = span.offsetTop;
    console.log(this.top);
  }

  private setTop(top: number){
    this.textComment.setTop(top);
  }

}
