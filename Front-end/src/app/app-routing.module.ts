import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineShopComponent } from './modules/online-shop/online-shop.component';
import { LandingComponent } from './modules/landing/landing.component';
import { WorkshopComponent } from './modules/workshop/workshop.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ShopAboutUsComponent } from './modules/online-shop/pages/shop-about-us/shop-about-us.component';
import { ShopContactUsComponent } from './modules/online-shop/pages/shop-contact-us/shop-contact-us.component';
import { ShopHomeComponent } from './modules/online-shop/pages/shop-home/shop-home.component';

const routes: Routes = [
  { path: "", redirectTo: 'landing', pathMatch: "full" },
  { path: 'landing', component: LandingComponent },
  // { path: 'shop/home', component: OnlineShopComponent },
  { path: 'shop/home', component: ShopHomeComponent },
  { path: 'shop/about-us', component: ShopAboutUsComponent },
  { path: 'shop/contact-us', component: ShopContactUsComponent },
  { path: 'training', component: WorkshopComponent },
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ],
    canActivate: []
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
