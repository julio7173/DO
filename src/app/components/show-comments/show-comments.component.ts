import { Component } from '@angular/core';
import { MyCommentComponent } from '../my-comment/my-comment.component';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../class/comment';
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
  selector: 'app-show-comments',
  standalone: true,
  imports: [TimelineComponent],
  templateUrl: './show-comments.component.html',
  styleUrl: './show-comments.component.css'
})
export class ShowCommentsComponent {

  constructor(public comment: CommentService){}

  setHeigh(top: number, bottom: number){
    return top + bottom;
  }

}
