import { Component } from '@angular/core';
import { InputHtmlComponent } from '../../components/input-html/input-html.component';

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [InputHtmlComponent],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.css'
})
export class HighlightsComponent {
  
  color = "";

}
