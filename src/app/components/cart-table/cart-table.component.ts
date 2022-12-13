import { Component,  Input,OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/cart-line'; 

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css'],
})
export class CartTableComponent implements OnInit {
  
 
   @Input() item:any=Person
   constructor(){}
   ngOnInit(): void {}
  
}
