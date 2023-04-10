import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { OnlineShopModule } from "./modules/online-shop/online-shop.module";
import { FooterComponent } from './modules/workshop/shared/footer/footer.component';
import { WorkshopModule } from './modules/workshop/workshop.module';
import { LandingModule } from './modules/landing/landing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    // FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    OnlineShopModule,
    WorkshopModule,
    LandingModule,
    HttpClientModule,
    RouterModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
