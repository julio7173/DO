import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddMessagesComponent } from './add-messages/add-messages.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddMessagesComponent, ListMessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Teaching';
}
