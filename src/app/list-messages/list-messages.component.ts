import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-list-messages',
  standalone: true,
  imports: [],
  templateUrl: './list-messages.component.html',
  styleUrl: './list-messages.component.css'
})
export class ListMessagesComponent {

  constructor(public messageService: MessagesService){}

  

}
