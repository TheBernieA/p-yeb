import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineShopComponent } from './modules/online-shop/online-shop.component';
import { LandingComponent } from './modules/landing/landing.component';
import { WorkshopComponent } from './modules/workshop/workshop.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  { path: "", redirectTo: 'landing', pathMatch: "full" },
  { path: 'online-home', component: OnlineShopComponent },
  { path: 'landing', component: LandingComponent },
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
