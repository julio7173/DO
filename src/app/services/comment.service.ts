import { ElementRef, HostListener, Injectable, Input, ViewChild } from '@angular/core';
import { Comment } from '../class/comment';
import { MyCommentComponent } from '../components/my-comment/my-comment.component';

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
