import { Injectable } from '@angular/core';
import { Comment } from '../class/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comment: Comment[] = [];

  constructor() { }

  add(top: number, bottom: number, comment: string){
    const newComment: Comment = new Comment(top, bottom, comment);
    this.comment.push(newComment);
  }
}
