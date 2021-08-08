import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  configUrl = 'http://localhost:3001/product/';
  constructor(private http: HttpClient) {}

  getProduct() {
    // now returns an Observable of Config
    return this.http.get<[Product]>(this.configUrl);
  }
}
