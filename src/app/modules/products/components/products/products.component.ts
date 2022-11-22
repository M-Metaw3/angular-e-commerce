import { ProductsSearchService } from './../../../../services/products-search.service';
import { ServerService } from 'src/app/services/server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public totalItem: number = 0;
  public searchTerm !: string;
  public productList: any;
  public filterCategory: any;


  searchKey: string = "";

  constructor(private cartService: ProductsSearchService, private productService: ProductsSearchService, private apiservice: ServerService) { }

  ngOnInit(): void {
    // this.cartService.getProducts()
    // .subscribe(res=>{
    //   this.totalItem = res.length;
    // })

    this.apiservice.getProducts()
      .subscribe(res => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          if (a.category === "women's clothing" || a.category === "men's clothing") {
            a.category = "fashion"
          }
          Object.assign(a, { quantity: 1, total: a.price });

        });
      });
    this.productService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }
  filter(category: string) {
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.category == category || category == '') {
          return a;
        }
      })
  }
  // filterPrice(price:string){
  //   this.filterCategory = this.productList
  //   .filter((a:any)=>{
  //     if(a.price == price || price==''){
  //       return a;
  //     }
  //   })
  // }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

}
