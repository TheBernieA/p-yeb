import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineShopComponent } from './online-shop.component';
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule } from '@angular/router';
import { AccessoriesComponent } from './components/accessories/accessories.component';



@NgModule({
    declarations: [
        OnlineShopComponent,
        HeroComponent,
        ProductsComponent,
        AccessoriesComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
    ],
    exports:[ ]
})
export class OnlineShopModule { }
