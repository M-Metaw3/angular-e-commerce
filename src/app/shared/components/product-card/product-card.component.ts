import { ServerService } from 'src/app/services/server.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {


  @Input() product: any;
  @Input() onClickRemove?: (productID: number) => void;

  constructor(private router: Router, private auth: AuthenticationService, private server: ServerService,

    private toast: HotToastService) { }

  ngOnInit(): void {
  }


  goToProductDetails() {
    this.router.navigate(['product', this.product.id]).then((e) => {
      window.location.reload();
    });
  }

  onClickAddToCard = (productID: number) => {

    if (productID == this.product.id) {
      this.server.addToCart(this.product, (e: any) => {
        this.toast.show("Product added", {
          style: {
            marginTop: "100px",
          }
        });
        console.log('Product added');

        e?.subscribe((e: any) => {

        });
      })
    }

  }


}
