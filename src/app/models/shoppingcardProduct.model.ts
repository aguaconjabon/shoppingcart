import { ProductModel } from '../models/product.model';

export interface ShoppingcardModel {
  product: ProductModel;
  count: number;
}
