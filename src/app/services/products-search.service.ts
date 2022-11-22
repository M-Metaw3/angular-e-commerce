import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ProductsSearchService {
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  constructor() { }

getProducts(){
  return this.productList.asObservable();
}

}