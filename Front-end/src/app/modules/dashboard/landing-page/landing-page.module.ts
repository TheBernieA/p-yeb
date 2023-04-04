import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { SharedModule as AppSharedModule } from '../../shared/shared.module';
import { LandingPageDashboardComponent } from './landing-page-dashboard/landing-page-dashboard.component';
import { LandingDashboardRoutingModule } from './landing-dashboard-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LandingPageComponent,
    LandingPageDashboardComponent
  ],
  imports: [
    CommonModule,
    AppSharedModule,
    LandingDashboardRoutingModule,
    RouterModule,
  ],
  exports: [LandingPageComponent]
})
export class LandingPageModule { }