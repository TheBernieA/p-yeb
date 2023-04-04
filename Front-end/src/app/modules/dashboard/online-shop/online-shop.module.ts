import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineShopComponent } from './online-shop.component';
import { SharedModule as AppSharedModule } from '../../shared/shared.module';




@NgModule({
  declarations: [
    OnlineShopComponent
  ],
  imports: [
    CommonModule,
    AppSharedModule
  ],
  exports: [OnlineShopComponent]
})
export class OnlineShopModule { }
