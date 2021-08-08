import { ProductModel } from 'src/app/models/product.model';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ShoppingcartService } from '../../service/shoppingCart/shoppingcart.service';

@Component({
  selector: 'app-navigator-header',
  templateUrl: './navigator-header.component.html',
  styleUrls: ['./navigator-header.component.css'],
})
export class NavigatorHeaderComponent implements OnInit {
  productCount = 0;
  totalAmmout: number;
  constructor(
    private shoppingcartService: ShoppingcartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.shoppingcartService.shoppingcartDataBehaviourSubject.subscribe(
      (shoppingcartService: [ProductModel]) => {
        this.totalAmmout = 0;
        if (shoppingcartService) {
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

  goShoppingCart() {
    this.router.navigate(['/shoppingcard', {}]);
  }

  goHome() {
    this.router.navigate(['/home', {}]);
  }
}
