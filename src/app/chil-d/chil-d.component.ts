import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chil-d',
  standalone: true,
  imports: [],
  templateUrl: './chil-d.component.html',
  styleUrl: './chil-d.component.css'
})
export class ChilDComponent {
  @Input () message = "";
}
