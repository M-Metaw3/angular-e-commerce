import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCartPageComponent } from './shop-cart-page.component';

describe('ShopCartPageComponent', () => {
  let component: ShopCartPageComponent;
  let fixture: ComponentFixture<ShopCartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopCartPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopCartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
