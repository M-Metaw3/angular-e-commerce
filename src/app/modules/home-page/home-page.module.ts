import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { CarouselSlideComponent } from './components/carousel-slide/carousel-slide.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent,
    CarouselSlideComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})





export class HomePageModule implements OnInit {

  user$=this.authservice.currentuser$;
  constructor(private  authservice:AuthenticationService ) { }

  ngOnInit(): void {
  }

}