import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, Product } from '.prisma/client';
import { NotFoundError } from 'rxjs';

@Injectable()
export class OnlineShopService {
    constructor(private readonly prisma: PrismaService) { }

    public async createProduct(product: any) {
        return await this.prisma.product.create({
            data: product
        })
    }
    public async getProducts(): Promise<Product[]> {
        return await this.prisma.product.findMany()
    }

    public async getProductById(id: string): Promise<Product> {
        return this.prisma.product.findUnique({
            where: { id }
        })
    }

    // public async updateProduct(): Promise<Product[]> {
    //     return this.prisma.product.findMany()
    // }

    public async deleteProduct(id: string): Promise<void> {
        const product = await this.prisma.product.findUnique({
            where: { id: id }
        })

        if (!product) {
            throw new NotFoundException()
        }
        await this.prisma.product.delete({
            where: { id }
        })
    }
}
