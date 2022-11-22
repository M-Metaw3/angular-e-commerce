import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  static readonly BASE_URL: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient, private auth: AuthenticationService) { }

  // _______________________ Products __________________
  // ____ get product ___
  getProducts(): Observable<any> {
    return this.httpClient.get(ServerService.BASE_URL + '/products');
  }

  //____get Product Limit 6 Product ______________________

  getProductsLimit(): Observable<any> {
    return this.httpClient.get(
      ServerService.BASE_URL + '/products' + '?&_limit=8'
    );
  }

  // ____ get product by id ___
  getProductByID(productID: number): Observable<any> {
    return this.httpClient.get(
      ServerService.BASE_URL + '/products/' + productID
    );
  }

  // _______________________ Orders __________________
  // ____ get orders ___
  getOrders(): Observable<any> {
    return this.httpClient.get(ServerService.BASE_URL + `/orders?userID=${this.auth.userID}`);
  }

  getOrdersBYUserId(): Observable<any> {
    console.log(this.auth.userID);

    return this.httpClient.get(
      ServerService.BASE_URL + '/orders?userID=' + this.auth.userID
    );
  }

  // ____ post orders ___
  addToCart(product: any, callBackFunction: Function): void {
    let isFound: boolean = false;
    this.getOrders().subscribe((orders) => {
      for (let i = 0; i < orders.length; i++) {
        if (orders[i].product.product.id == product.id) {
          isFound = true;
          break;
        }
      }

      console.log(isFound);

      if (!isFound) {
        callBackFunction(
          this.httpClient.post(ServerService.BASE_URL + '/orders', {
            id: this.generateID(),
            userID: this.auth.userID,
            product: {
              product: product,
              count: 1,
            },
          })
        );
      } else {
        callBackFunction(null);
      }
    });
  }

  // ____ update orders ___

  // ____ delete orders ___
  deleteOrder(id: number) {
    console.log(id);
    return this.httpClient.delete(ServerService.BASE_URL + `/orders/${id}`);
  }


  //// Delete All Orders
  deleteAllOrder(){
    console.log(this.auth.userID);
    return this.httpClient.delete(ServerService.BASE_URL + `/orders?userID=${this.auth.userID}`
    
    )
    
    
  }

  // _______________________ Wich list __________________
  // ____ get Wich list ___
  getWishlist(): Observable<any> {
    return this.httpClient.get(
      ServerService.BASE_URL + '/wishlist?userID=' + this.auth.userID
    );
  }

  // ____ post Wich list ___
  addToWishList(product: any): Observable<any> {
    console.log(product);
    return this.httpClient.post(ServerService.BASE_URL + '/wishlist', {
      id: this.generateID(),
      userID: this.auth.userID,
      product: product,
    });
  }

  // ____ delete orders ___
  deleteFromWish(id: number) {
    console.log(id);
    return this.httpClient.delete(ServerService.BASE_URL + `/wishlist/${id}`);
  }

  // ________________________ Generate Random ID (use it when post new any elment) ___________________
  generateID(): number {
    return Math.floor(Math.random() * 10000);
  }

  // ------------------------cart--------------
}
