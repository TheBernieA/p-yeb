import { Module } from '@nestjs/common';
import { LandingModule } from './landing/landing.module';
import { ShopModule } from './shop/shop.module';
import { WorkshopModule } from './workshop/workshop.module';

@Module({
  imports: [LandingModule, ShopModule, WorkshopModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
