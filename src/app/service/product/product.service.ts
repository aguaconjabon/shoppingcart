import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DiscountModel } from '../../models/discount.model';
import { ProductModel } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  configUrl = 'http://127.0.0.1:8080/product/';
  constructor(private http: HttpClient) {}

  getProduct() {
    // now returns an Observable of Config
    return this.http.get<[ProductModel]>(this.configUrl);
  }
  // now returns an Observable of Config
  getDiscount() {
    return this.http.get<[DiscountModel]>(this.configUrl + 'discount');
  }
}
