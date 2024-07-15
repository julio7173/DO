import { Component } from '@angular/core';
import { InputHtmlComponent } from '../../components/input-html/input-html.component';
import { ShowCommentsComponent } from '../../components/show-comments/show-comments.component';

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [InputHtmlComponent, ShowCommentsComponent],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.css'
})
export class HighlightsComponent {
  
  color = "";

}
