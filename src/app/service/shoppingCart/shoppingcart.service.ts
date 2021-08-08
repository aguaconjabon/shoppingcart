import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { Product } from '../../models/product.model';

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
  public shoppingcartDataBehaviourSubject: BehaviorSubject<Array<Product>> =
    new BehaviorSubject<Array<Product>>([]);

  public readonly timerObs: Observable<Array<Product>> =
    (this.shoppingcartDataBehaviourSubject = new BehaviorSubject<
      Array<Product>
    >([]));
}
