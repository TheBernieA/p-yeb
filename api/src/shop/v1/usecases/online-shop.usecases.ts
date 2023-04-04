import { Injectable } from '@nestjs/common';
import { OnlineShopService } from '../services/online-shop.service';

@Injectable()
export class OnlineShopUsecase {
  public constructor(private shopService: OnlineShopService) { }

  public async createProduct(product) {
    return await this.shopService.createProduct(product)
  }

  public async getProducts() {
    return await this.shopService.getProducts();
  }
  public async getProductById(id:string) {
    return await this.shopService.getProductById(id);
  }

  public async deleteProduct(id: string) {
    return this.shopService.deleteProduct(id)
  }
}
