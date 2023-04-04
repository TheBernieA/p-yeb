import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkshopComponent } from './workshop/workshop.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OnlineShopComponent } from './online-shop/online-shop.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: 'admin/landing-page',
    component: LandingPageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/modules/dashboard/landing-page/landing-page.module').then(m => m.LandingPageModule)
      }
    ]
  },
  {
    path: 'admin/workshop',
    component: WorkshopComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/modules/dashboard/workshop/workshop.module').then(m => m.WorkshopModule)
      }
    ]
  },
  {
    path: 'admin/online-shop',
    component: OnlineShopComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/modules/dashboard/online-shop/online-shop.module').then(m => m.OnlineShopModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }