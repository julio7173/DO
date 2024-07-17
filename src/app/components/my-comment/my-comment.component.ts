import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { HighlightDirective } from '../../directive/highlight.directive';
import { Comment } from '../../class/comment';

@Component({
  selector: 'app-my-comment',
  standalone: true,
  imports: [],
  templateUrl: './my-comment.component.html',
  styleUrl: './my-comment.component.css'
})
export class MyCommentComponent {

  @Input() comment!: Comment;

  @Input() value!: string;

}
