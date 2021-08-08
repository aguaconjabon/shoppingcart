import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../service/product/product.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  constructor(private productService: ProductService) {}
  product: Array<ProductModel>;
  ngOnInit(): void {
    this.product = [];
    this.productService.getProduct().subscribe((data: [ProductModel]) => {
      data.forEach((element: ProductModel) => {
        this.product.push({
          _id: element._id,
          description: element.description,
          brand: element.brand,
          image: element.image,
          price: element.price,
          id: element.id,
        });
      });
    });
  }
}
