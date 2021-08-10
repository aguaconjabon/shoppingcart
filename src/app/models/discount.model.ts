export interface DiscountModel {
  _id: string;
  brand: string;
  discount: number;
  threshold: number;
  totalForBrand?: number;
}
