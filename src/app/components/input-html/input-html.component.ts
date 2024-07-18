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

  highlights = [
    "Green",
    "Yellow",
    "Cyan",
  ];

  constructor(private commentList: CommentService){}

  // addComment(){
  //   this.commentList.add(this.comment);
  //   this.id += 1;
  // }

  changeHighlight(index: number){
    switch (index) {
      case 0:
        this.color = "lightgreen";
        break;
      case 1:
        this.color = "yellow";
        break;
      case 2:
        this.color = "cyan";
        break;
    
      default:
        break;
    }
  }
}
