import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { 

  }

  message: string[] = [];

  addMessage(message: string){
    this.message.push(message);
  }

}
// localStorage.setItem('message', JSON.stringify(message));
