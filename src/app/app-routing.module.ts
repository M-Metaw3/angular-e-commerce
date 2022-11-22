import { ProductsComponent } from './modules/products/components/products/products.component';
import { ProductDetailsComponent } from './modules/product-details/product-details/product-details.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth-page/componants/login/login.component';
import { RegistrationComponent } from './modules/auth-page/componants/registration/registration.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { ShopCartPageComponent } from './modules/shop-cart-page/shop-cart-page/shop-cart-page.component';
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
import { PaymentComponent } from './modules/payment-page/components/payment/payment.component';
import { WishListComponent } from './modules/wish-list/component/wish-list/wish-list.component';
import { PaymentDoneComponent } from './modules/payment-page/components/payment/payment-done/payment-done.component';
const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
    // loadChildren: () => import('./modules/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'home',
    component: HomePageComponent,
    ...canActivate(redirectToLogin),
  },

  {
    path: 'home',
    component: HomePageComponent,
    loadChildren: () =>
      import('./modules/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
    loadChildren: () =>
      import('./modules/product-details/product-details.module').then(
        (m) => m.ProductDetailsModule
      ),
  },
  {
    path: 'wish',
    component: WishListComponent,
    loadChildren: () =>
      import('./modules/wish-list/wish-list.module').then(
        (m) => m.WishListModule
      ),
  },
  {
    path: 'products',
    component: ProductsComponent,
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'payment',
    component: PaymentComponent,
    loadChildren: () =>
      import('./modules/payment-page/payment-page.module').then(
        (m) => m.PaymentPageModule
      ),

  },
  {
    path: 'cart',
    component: ShopCartPageComponent,
    loadChildren: () =>
      import('./modules/shop-cart-page/shop-cart-page.module').then(
        (m) => m.ShopCartPageModule
      ),
  },
  {
    path: "paymentdone", component
      : PaymentDoneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
