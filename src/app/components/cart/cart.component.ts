import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  ngOnInit(): void {
    var productToAdd = sessionStorage.getItem('productToAdd');
    if (productToAdd) {
      sessionStorage.removeItem('productToAdd')
      console.log(JSON.parse(productToAdd));
    }
  }
}