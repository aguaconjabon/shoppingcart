import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ShoppingcartService } from '../../service/shoppingCart/shoppingcart.service';
import { NavigatorHeaderComponent } from './navigator-header.component';

describe('NavigatorHeaderComponent', () => {
  let component: NavigatorHeaderComponent;
  let fixture: ComponentFixture<NavigatorHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigatorHeaderComponent],
      providers: [
        {
          provide: ShoppingcartService,
          use: ShoppingcartServiceMock,
        },
      ],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorHeaderComponent);
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
