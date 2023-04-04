import { Module } from '@nestjs/common';
import { OnlineShopController } from './v1/controllers/online-shop.controller';
import { OnlineShopService } from './v1/services/online-shop.service';
import { OnlineShopUsecase } from './v1/usecases/online-shop.usecases';
import { PrismaService } from 'src/prisma.service';

@Module({
    controllers: [OnlineShopController],
    exports: [OnlineShopUsecase, OnlineShopService],
    providers: [OnlineShopUsecase, OnlineShopService,PrismaService],
})
export class ShopModule { }
