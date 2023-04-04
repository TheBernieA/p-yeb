import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopComponent } from './workshop.component';
import { HeroComponent } from './components/hero/hero.component';
import { SharedModule as WorkShopSharedModule } from './shared/shared.module';
import { SharedModule as AppSharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [WorkshopComponent, HeroComponent],
  imports: [
    CommonModule,
    WorkShopSharedModule,
    RouterModule,
    AppSharedModule
  ]
})
export class WorkshopModule { }
