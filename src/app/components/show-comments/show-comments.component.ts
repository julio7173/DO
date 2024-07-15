import { Component } from '@angular/core';
import { MyCommentComponent } from '../my-comment/my-comment.component';

@Component({
  selector: 'app-show-comments',
  standalone: true,
  imports: [MyCommentComponent],
  templateUrl: './show-comments.component.html',
  styleUrl: './show-comments.component.css'
})
export class ShowCommentsComponent {

}
