import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { Comment } from '../class/comment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User[] = [];

  constructor() { }

  add(id: number, name: string, date: string, type: string, comment: Comment){
    const newUser: User = new User(id, name, date, type, comment);
    this.user.push(newUser);
  }
}
