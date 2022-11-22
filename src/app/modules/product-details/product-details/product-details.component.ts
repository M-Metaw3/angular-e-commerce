import { ServerService } from './../../../services/server.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private server: ServerService) { }

  productID: number = 0;
  product: any = null;

  isOnCart: boolean = false;
  orderDetails: any = null;

  isOnWishList: boolean = false;


  otherProducts: any[] = [];

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data: ParamMap) => {
      this.productID = parseInt(data.get("id") || "0")
      this.server.getProductByID(this.productID).subscribe(e => {
        console.log(e);
        this.product = e;
      });
    })

    this.server.getProducts().subscribe((e: any[]) => {
      this.otherProducts = e.filter(e => e.id != this.productID);
    });
  }


  toggolToCard() {
    if (!this.isOnCart) {
      this.server.addToCart(this.product, (e: any) => {
        this.isOnCart = true;
        e?.subscribe((e: any) => {
          if (e != null)
            this.orderDetails = e;
        }
        )
      });
    } else {
      this.server.deleteOrder(this.orderDetails.id).subscribe(e => {
        console.log(e);

        this.isOnCart = false;
      })
    }
  }

  toggolToWishList() {
    if (!this.isOnWishList) {
      this.server.addToWishList(this.product).subscribe(e => {
        this.isOnWishList = true;
      })
    }
  }

}
