import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  _getProductsUrl = 'http://localhost:3000/api/products';
  products = new Array<Product>();

  constructor(private httpClient: HttpClient) {}

  async getProducts(): Promise<Array<Product>> {
    return new Promise((resolve, reject) => {
      this.httpClient.get<Array<Product>>(this._getProductsUrl).subscribe({
        next: (response: Array<Product>) => {
          resolve(response);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  }
}
