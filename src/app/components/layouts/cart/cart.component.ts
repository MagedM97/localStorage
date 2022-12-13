import { Component, Input } from '@angular/core';
import { Person } from 'src/app/interfaces/cart-line';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
   m=new Person;
}