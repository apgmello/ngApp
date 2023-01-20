import { Subscription } from 'rxjs';
import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = new Array<Product>();
  
  constructor(
    private productService: ProductService,
    private cartService: CartService,
  ) {
   
    this.getProducts();
  }

  async getProducts() {
      this.products = await this.productService.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
