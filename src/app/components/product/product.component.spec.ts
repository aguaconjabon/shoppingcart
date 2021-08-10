import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartService } from '../../service/shoppingCart/shoppingcart.service';
import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
      providers: [
        {
          provide: ShoppingcartService,
          use: ShoppingcartServiceMock,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
export class ShoppingcartServiceMock {
  public load(): Promise<boolean> {
    return new Promise(() => {
      return true;
    });
  }
}
