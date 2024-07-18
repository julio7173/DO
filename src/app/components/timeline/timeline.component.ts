import { Component, Input } from '@angular/core';
import { Comment } from '../../class/comment';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {

  @Input() comment!: Comment;

  @Input() value!: string;

  @Input() height!: number;

}
