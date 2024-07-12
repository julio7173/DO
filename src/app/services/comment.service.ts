import { Injectable } from '@angular/core';
import { Comment } from '../class/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comment: Comment[] = [];

  index = 0;

  constructor() { }

  add(comment: string){
    const id = this.index;
    const newComment: Comment = new Comment(id, comment);
    this.comment.push(newComment);
    this.index += 1;
  }
}
