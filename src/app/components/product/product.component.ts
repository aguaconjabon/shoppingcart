import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';
import { ShoppingcartService } from '../../service/shoppingCart/shoppingcart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input()
  product: Product;

  item: Product;
  constructor(private shoppingcartService: ShoppingcartService) {}
  ngOnInit(): void {
    console.log('el producto', this.product);
    this.item = this.product;
    this.countSelected();
  }

  selectedCount = 0;

  addProduct() {
    let products =
      this.shoppingcartService.shoppingcartDataBehaviourSubject.getValue();
    products.push(this.item);
    this.shoppingcartService.shoppingcartDataBehaviourSubject.next(products);
  }

  countSelected() {
    this.shoppingcartService.shoppingcartDataBehaviourSubject.subscribe(
      (shoppingcartService: [Product]) => {
        this.selectedCount = 0;
        shoppingcartService.forEach((product) => {
          if (this.item.id == product.id) {
            this.selectedCount = this.selectedCount + 1;
          }
        });
      }
    );
  }
}
