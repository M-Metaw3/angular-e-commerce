import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StarRateComponent } from './components/star-rate/star-rate.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    ProductCardComponent,
    StarRateComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProductCardComponent,
    StarRateComponent,
  ]
})
export class SharedModule { }
