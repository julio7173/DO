import { Component, computed, signal } from '@angular/core';
import { InputHtmlComponent } from '../../components/input-html/input-html.component';
import { ShowCommentsComponent } from '../../components/show-comments/show-comments.component';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [InputHtmlComponent, ShowCommentsComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {

  // Writable signal

  count = signal<number>(0);

  change(){
    this.count.set(4);
  }

  update(){
    this.count.update(value => value + 1);
  }

  // Read Only Signal

  products = signal([
    { name: "producto A", price: 10},
    { name: "producto B", price: 15},
    { name: "producto C", price: 20},
  ]);

  total = computed(() => this.products().reduce((sum, product) => sum + product.price, 0));

  showTotal = this.total;

  calculated(){
    this.total();
  }

}
