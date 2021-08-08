import { Component, Input, OnInit } from '@angular/core';

import { ProductModel } from '../../models/product.model';
import { ShoppingcartService } from '../../service/shoppingCart/shoppingcart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input()
  product: ProductModel;

  item: ProductModel;
  constructor(private shoppingcartService: ShoppingcartService) {}
  ngOnInit(): void {
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

  deleteProduct() {
    let products =
      this.shoppingcartService.shoppingcartDataBehaviourSubject.getValue();

    if (products) {
      products.forEach((value: ProductModel, index: number) => {
        if (this.item.id == value.id) {
          products.splice(index, 1);
          return;
        }
      });

      this.shoppingcartService.shoppingcartDataBehaviourSubject.next(products);
    }
  }

  countSelected() {
    this.shoppingcartService.shoppingcartDataBehaviourSubject.subscribe(
      (shoppingcartService: [ProductModel]) => {
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
