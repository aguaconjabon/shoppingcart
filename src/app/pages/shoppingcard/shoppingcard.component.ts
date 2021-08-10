import { first } from 'rxjs/operators';
import { DiscountModel } from 'src/app/models/discount.model';
import { ProductModel } from 'src/app/models/product.model';
import { ShoppingcardModel } from 'src/app/models/shoppingcardProduct.model';

import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../service/product/product.service';
import { ShoppingcartService } from '../../service/shoppingCart/shoppingcart.service';

@Component({
  selector: 'app-shoppingcard',
  templateUrl: './shoppingcard.component.html',
  styleUrls: ['./shoppingcard.component.css'],
})
export class ShoppingcardComponent implements OnInit {
  products: ProductModel[];
  dicountValues: DiscountModel[] = [];
  shoppingcardProduct: ShoppingcardModel[] = [];
  totalAmmount = 0;
  applyDescount: DiscountModel[] = [];
  disccountSelected: DiscountModel;
  messageDiscount: string;
  discountApply = 0;
  recomendationMessage: string;

  constructor(
    private shoppingcartService: ShoppingcartService,
    private productService: ProductService
  ) {
    this.shoppingcartService.shoppingcartDataBehaviourSubject.subscribe(
      (shoppingcartService: [ProductModel]) => {
        this.products = shoppingcartService;
        this.calculateShoppingcard(shoppingcartService);
        this.discountApply = 0;
        this.messageDiscount = '';
      }
    );
  }

  ngOnInit(): void {
    this.products =
      this.shoppingcartService.shoppingcartDataBehaviourSubject.getValue();

    this.getDiscountValue();
  }

  calculateShoppingcard(products: ProductModel[]) {
    this.shoppingcardProduct = [];

    let countProduts = 0;

    let validateExist = false;

    products.forEach((product: ProductModel) => {
      let shopcard: any = {};
      countProduts = 0;
      validateExist = false;
      products.forEach((productValidate: ProductModel) => {
        if (product.id === productValidate.id) {
          countProduts = countProduts + 1;
        }
      });

      shopcard.product = product;
      shopcard.count = countProduts;

      this.shoppingcardProduct.forEach((element: ShoppingcardModel) => {
        if (element.product.id === shopcard.product.id) {
          validateExist = true;
        }
      });

      if (!validateExist) {
        this.shoppingcardProduct.push(shopcard);
      }
    });

    this.calculateTotalAmmout();
  }

  calculateTotalAmmout() {
    this.totalAmmount = 0;
    this.products.forEach((product) => {
      this.totalAmmount = this.totalAmmount + product.price;
    });
  }

  getDiscountValue() {
    this.dicountValues = [];
    this.productService.getDiscount().subscribe((data: [DiscountModel]) => {
      data.forEach((element: DiscountModel) => {
        this.dicountValues.push({
          _id: element._id,
          brand: element.brand,
          discount: element.discount,
          threshold: element.threshold,
        });
      });

      this.findDescount();
    });
  }

  findDescount() {
    this.applyDescount = [];

    this.shoppingcardProduct.forEach((product) => {
      const found = this.dicountValues.find(
        (element) => element.brand == product.product.brand
      );

      if (found) {
        let exist = this.applyDescount.find(
          (element) => element.brand == found.brand
        );

        if (!exist) {
          this.applyDescount.push(found);
        }
      }
    });

    this.showMessageDiscount();
  }

  showMessageDiscount() {
    this.discountApply = 0;
    this.messageDiscount = '';
    let totalAmmoutForBrand = 0;

    console.table(this.applyDescount);

    this.applyDescount = this.applyDescount.sort(
      (a, b) => b.discount - a.discount
    );

    this.disccountSelected = this.applyDescount[0]
      ? this.applyDescount[0]
      : null;

    let discountForBrand = this.getDiscountForBrand(this.applyDescount);

    if (this.disccountSelected) {
      const productForDiscount = this.products.filter(
        (element) => element.brand === this.disccountSelected.brand
      );

      productForDiscount.forEach((product) => {
        totalAmmoutForBrand = totalAmmoutForBrand + product.price;
      });
      const ammoutForDiscount =
        this.disccountSelected.threshold - totalAmmoutForBrand;

      if (totalAmmoutForBrand < this.disccountSelected.threshold) {
        this.messageDiscount =
          'Te falta $' +
          ammoutForDiscount +
          ' Para obtener un descuento de ' +
          this.disccountSelected.discount +
          ' seleccionando productos de la marca ' +
          this.disccountSelected.brand;
      } else if (totalAmmoutForBrand >= this.disccountSelected.threshold) {
        this.messageDiscount =
          'Tienes un descuento aplicado de $' +
          this.disccountSelected.discount +
          ' de la marca: ' +
          this.disccountSelected.brand +
          ' por haber sumado igual o mas de $' +
          this.disccountSelected.threshold +
          ' de dicha marca';

        this.discountApply = this.disccountSelected.discount;
      }

      if (
        discountForBrand &&
        totalAmmoutForBrand <= this.disccountSelected.threshold
      ) {
        this.messageDiscount =
          'Tienes un descuento aplicado de $' +
          discountForBrand.discount +
          ' de la marca: ' +
          discountForBrand.brand +
          ' por haber sumado igual o mas de $' +
          discountForBrand.threshold +
          ' de dicha marca';

        this.discountApply = discountForBrand.discount;
      }

      if (discountForBrand.discount < this.disccountSelected.discount) {
        this.recomendationMessage =
          'Te falta  $' +
          ammoutForDiscount +
          ' de la Marca:  ' +
          this.disccountSelected.brand +
          ' para obtener un mayor descuento  de $' +
          this.disccountSelected.discount;
      }
    }
  }

  getDiscountForBrand(applyDescount: DiscountModel[]): DiscountModel {
    let totalAmmout = 0;
    let priceForBrandAux: DiscountModel;
    let priceForBrand: DiscountModel;

    applyDescount.forEach((brandData) => {
      totalAmmout = 0;

      this.products.forEach((product) => {
        if (brandData.brand === product.brand) {
          totalAmmout = product.price + totalAmmout;
        }

        if (totalAmmout >= brandData.threshold) {
          priceForBrandAux = brandData;
          priceForBrandAux.totalForBrand = totalAmmout;
        }
      });

      if (!priceForBrand && priceForBrandAux) {
        priceForBrand = priceForBrandAux;
      } else if (
        priceForBrand &&
        priceForBrandAux.threshold > priceForBrand.threshold
      ) {
        priceForBrand = priceForBrandAux;
      }
    });

    console.table(priceForBrand);
    return priceForBrand;
  }
}
