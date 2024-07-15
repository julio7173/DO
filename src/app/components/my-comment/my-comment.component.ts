import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { HighlightDirective } from '../../directive/highlight.directive';

@Component({
  selector: 'app-my-comment',
  standalone: true,
  imports: [],
  templateUrl: './my-comment.component.html',
  styleUrl: './my-comment.component.css'
})
export class MyCommentComponent {

  // @ViewChild("textMark") textMark!:ElementRef;
  // @Input() textMark!:ElementRef;
  @ViewChild("commentMark") commentMark!:ElementRef;

  setTop(top: number){
    // this.commentMark.nativeElement.offsetTop = this.textMark.nativeElement.offsetTop;
    console.log(this.commentMark.nativeElement.offsetTop);
    // console.log(this.textMark.nativeElement.offsetTop);
    this.commentMark.nativeElement.style.top = top+"px";
    console.log(this.commentMark.nativeElement.style.top = top);
  }

}
