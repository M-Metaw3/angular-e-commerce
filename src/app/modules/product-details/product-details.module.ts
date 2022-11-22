import { AppModule } from './../../app.module';
import { NgModule, OnInit } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CommonModule } from '@angular/common';
import { StarRateComponent } from 'src/app/shared/components/star-rate/star-rate.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ProductDetailsModule {
}
