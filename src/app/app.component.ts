import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddMessagesComponent } from './add-messages/add-messages.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';
import { InputScriptComponent } from './components/input-script/input-script.component';
import { ShowListComponent } from './components/show-list/show-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputScriptComponent, ShowListComponent, AddMessagesComponent, ListMessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Teaching';
}
