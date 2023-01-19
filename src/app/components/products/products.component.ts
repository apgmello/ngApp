import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = new Array<Product>();

  constructor(private productService: ProductService, private router: Router) {
    this.getProducts();
  }

  async getProducts() {
    this.products = await this.productService.getProducts()
  }

  addToCart(product: Product) {
    sessionStorage.setItem('productToAdd', JSON.stringify(product));
    this.router.navigate(['/cart']);
  }

}
