import { Component, Input } from '@angular/core';
import { Comment } from '../../class/comment';
import { NoteComponent } from '../../assets/svg/note/note.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NoteComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() index!: number;
  @Input() name!: string;
  @Input() date!: Date;
  @Input() type!: string;
  @Input() comment!: Comment;

  alert(){
    alert("Funciona");
  }

  width = "24px";
  height = "24px";
  

}
