import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  user = this.authService.currentuser$;
  constructor(private authService: AuthenticationService, private server: ServerService) {}

  objArr: {}[] = [
    {
      title: ' Samsung 860 EVO SATA III 2.5',
      priceAfter: '199.00',
      priceBefore: '299.00',
      img: '../../../assets/2.png',
    },
    {
      title: 'Mapple Wood Accent Chair',
      priceAfter: '399.00',
      priceBefore: '499.00',
      img: '../../../assets/1.png',
    },
    {
      title: 'Clothes iron Panasonic',
      priceAfter: '299.00',
      priceBefore: '399.00',
      img: '../../../assets/3.png',
    },
  ];

  productArr:any[]=[];


  ngOnInit(): void {
    this.server.getProductsLimit().subscribe((data)=>{
      this.productArr = data;
      console.log(this.productArr);
      
    })


  }
}
