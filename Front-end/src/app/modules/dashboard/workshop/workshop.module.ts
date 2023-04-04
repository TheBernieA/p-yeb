import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopComponent } from './workshop.component';
import { SharedModule as AppSharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    WorkshopComponent
  ],
  imports: [
    CommonModule,
    AppSharedModule
  ],
  exports: [WorkshopComponent]
})
export class WorkshopModule { }
