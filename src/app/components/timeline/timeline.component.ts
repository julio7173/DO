import { Component, Input } from '@angular/core';
import { Comment } from '../../class/comment';
import { UserComponent } from '../user/user.component';
import { UserService } from '../../services/user.service';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {

  // @Input() comment!: Comment;

  @Input() value!: string;

  @Input() height!: number;

  name = "JC";

  date = Date.now.toString();

  // constructor(public users: UserService){}
  constructor(public comment: CommentService){}

}
