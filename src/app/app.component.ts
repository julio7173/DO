import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ListComponent } from './list/list.component';
import { ParenTComponent } from './paren-t/paren-t.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, ListComponent, ParenTComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Teaching';

  loggedIn = true;

  isUnchanged = true;

  toggleLog(){
    this.loggedIn = !this.loggedIn;
  }
}
