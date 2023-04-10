import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineShopComponent } from './online-shop.component';
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule } from '@angular/router';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { ShopAboutUsComponent } from './pages/shop-about-us/shop-about-us.component';
import { ShopContactUsComponent } from './pages/shop-contact-us/shop-contact-us.component';
import { ShopHomeComponent } from './pages/shop-home/shop-home.component';



@NgModule({
    declarations: [
        OnlineShopComponent,
        HeroComponent,
        ProductsComponent,
        AccessoriesComponent,
        ShopAboutUsComponent,
        ShopContactUsComponent,
        ShopHomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
    ],
    exports: []
})
export class OnlineShopModule { }
