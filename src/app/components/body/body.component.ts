import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';
import { ProductService } from '../../service/product/product.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  constructor(private productService: ProductService) {}
  product: Array<Product> = [];
  ngOnInit(): void {
    this.productService.getProduct().subscribe((data: [Product]) => {
      data.forEach((element: Product) => {
        this.product.push({
          _id: element._id,
          description: element.description,
          brand: element.brand,
          image: element.image,
          price: element.price,
          id: element.id,
        });
      });

      console.log('los productos', this.product);
    });
  }
}
