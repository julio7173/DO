import { Component } from '@angular/core';
import { HighlightDirective } from '../../directive/highlight.directive';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-input-html',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './input-html.component.html',
  styleUrl: './input-html.component.css'
})
export class InputHtmlComponent {

  id = 0;

  comment = "My comment #" + this.id;

  color = "";

  constructor(private commentList: CommentService){}

  addComment(){
    this.commentList.add(this.comment);
    this.id += 1;
  }
}
