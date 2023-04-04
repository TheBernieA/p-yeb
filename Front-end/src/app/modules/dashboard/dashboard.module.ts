import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OnlineShopModule } from '../online-shop/online-shop.module';
import { WorkshopModule } from '../workshop/workshop.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    RouterModule,
    OnlineShopModule,
    WorkshopModule,
    LandingPageModule
  ]
})
export class DashboardModule { }
