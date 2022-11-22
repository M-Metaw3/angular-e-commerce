import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss']
})

  export class MyHeaderComponent implements OnInit {
    // public totalItem : number = 0;
    // public searchTerm !: string;
    constructor(public authservice:AuthenticationService,
     
      private router:Router)
    {
  
    }
    ngOnInit(): void { 
      // this.cartService.getProducts()
      // .subscribe(res=>{
      //   this.totalItem = res.length;
      // })
    }
    logout()
    {
      this.authservice.logout().subscribe(()=>{
  this.router.navigate([""]);
      });
    }
    // search(event:any){
    //   this.searchTerm = (event.target as HTMLInputElement).value;
    //   console.log(this.searchTerm);
    //   this.cartService.search.next(this.searchTerm);
    // }
  
  }
