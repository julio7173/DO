import { Component } from '@angular/core';
import { ChilDComponent } from '../chil-d/chil-d.component';

@Component({
  selector: 'app-paren-t',
  standalone: true,
  imports: [ChilDComponent],
  templateUrl: './paren-t.component.html',
  styleUrl: './paren-t.component.css'
})
export class ParenTComponent {
  parentMessage = "Hello from the parent";

  communication1 = "@Input";
}
