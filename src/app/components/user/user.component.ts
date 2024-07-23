import { Component, Input } from '@angular/core';
import { Comment } from '../../class/comment';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() index!: number;
  @Input() name!: string;
  @Input() date!: Date;
  @Input() type!: string;
  @Input() comment!: Comment;

  

}
