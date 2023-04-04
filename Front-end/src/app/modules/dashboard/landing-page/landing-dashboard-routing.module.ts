import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageDashboardComponent } from './landing-page-dashboard/landing-page-dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: LandingPageDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingDashboardRoutingModule { }
