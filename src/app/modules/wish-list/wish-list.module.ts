import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListComponent } from './component/wish-list/wish-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WishListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class WishListModule { }
