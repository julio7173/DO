import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HighlightsComponent } from './pages/highlights/highlights.component';
import { TodoComponent } from './pages/todo/todo.component';
import { HighlightDirective } from './directive/highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HighlightsComponent, TodoComponent, RouterLink, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Teaching';
}
