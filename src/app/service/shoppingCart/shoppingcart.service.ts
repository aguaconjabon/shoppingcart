import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { ProductModel } from '../../models/product.model';

/**
 * Clase inyectable para el manejo de datos de loading
 *
 * @export
 */
@Injectable({
  providedIn: 'root',
})
@Injectable()
export class ShoppingcartService {
  public shoppingcartDataBehaviourSubject: BehaviorSubject<
    Array<ProductModel>
  > = new BehaviorSubject<Array<ProductModel>>([]);

  public readonly timerObs: Observable<Array<ProductModel>> =
    (this.shoppingcartDataBehaviourSubject = new BehaviorSubject<
      Array<ProductModel>
    >([]));
}
