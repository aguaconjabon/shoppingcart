import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartService } from '../../service/shoppingCart/shoppingcart.service';
import { ShoppingcardComponent } from './shoppingcard.component';

describe('ShoppingcardComponent', () => {
  let component: ShoppingcardComponent;
  let fixture: ComponentFixture<ShoppingcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingcardComponent],
      providers: [
        {
          provide: ShoppingcartService,
          use: ShoppingcartServiceMock,
        },
      ],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcardComponent);
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
