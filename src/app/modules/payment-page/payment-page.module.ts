import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './components/payment/payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentDoneComponent } from './components/payment/payment-done/payment-done.component';



@NgModule({
  declarations: [
    PaymentComponent,
    PaymentDoneComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class PaymentPageModule { }
