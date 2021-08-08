import { Product } from 'src/app/models/product.model';

import { Component, OnInit } from '@angular/core';

import { ShoppingcartService } from '../../service/shoppingCart/shoppingcart.service';

@Component({
  selector: 'app-navigator-header',
  templateUrl: './navigator-header.component.html',
  styleUrls: ['./navigator-header.component.css'],
})
export class NavigatorHeaderComponent implements OnInit {
  productCount = 0;
  totalAmmout: number;
  constructor(private shoppingcartService: ShoppingcartService) {}

  ngOnInit(): void {
    this.shoppingcartService.shoppingcartDataBehaviourSubject.subscribe(
      (shoppingcartService: [Product]) => {
        this.totalAmmout = 0;
        if (shoppingcartService) {
          console.log('Count product');
          this.productCount = shoppingcartService.length;

          shoppingcartService.forEach((element) => {
            this.totalAmmout = this.totalAmmout + element.price;
          });
        }
      }
    );
  }

  clearShoppingCart() {
    this.shoppingcartService.shoppingcartDataBehaviourSubject.next([]);
  }
}
