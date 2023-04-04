import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopNavbarComponent } from './workshop-navbar/workshop-navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [WorkshopNavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [WorkshopNavbarComponent]
})
export class SharedModule { }
