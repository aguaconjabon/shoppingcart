import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorHeaderComponent } from './navigator-header.component';

describe('NavigatorHeaderComponent', () => {
  let component: NavigatorHeaderComponent;
  let fixture: ComponentFixture<NavigatorHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatorHeaderComponent ]
    })
    .compileComponents();
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
