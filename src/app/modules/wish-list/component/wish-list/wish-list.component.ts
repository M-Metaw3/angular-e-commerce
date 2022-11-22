import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  constructor(private server: ServerService) { }
  WishList: any[] = [];

  product: any;
  check: boolean = false;

  isLoading: boolean = false;

  checkList() {
    if (this.WishList.length != 0) {
      this.check = true;
      console.log("true");
    }


  }

  ReGetWishlist() {
    this.server.getWishlist().subscribe(data => {
      this.WishList = data;
      this.checkList()
    });
  }

  ngOnInit(): void {
    this.ReGetWishlist();
    setTimeout(() => {
      this.ReGetWishlist();
      this.isLoading = true;
    }, 1000);

  }


  onClickRemove = (ID: number) => {
    for (let item of this.WishList) {
      console.log(ID)
      if (ID == item.product.id) {
        console.log(item.product.id)
        this.server.deleteFromWish(item.id).subscribe(() => {
          this.ReGetWishlist()
        })
      }
    }
    this
  }
}
