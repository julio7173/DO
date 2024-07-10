import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputScriptComponent } from './components/input-script/input-script.component';
import { ShowListComponent } from './components/show-list/show-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputScriptComponent, ShowListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Teaching';
}
