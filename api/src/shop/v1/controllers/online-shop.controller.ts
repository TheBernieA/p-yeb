import { Body, Controller, Delete, Get, Post, Res, Param, HttpStatus } from '@nestjs/common';
import { OnlineShopUsecase } from '../usecases/online-shop.usecases';
import { Response } from 'express';
import { CreateProductDto } from '../dto/create-product.dto';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('v1/online-shop')
export class OnlineShopController {
    public constructor(private productUsecase: OnlineShopUsecase) { }

    @Get('products')
    async getProducts(
        @Res() res: Response<any>
    ): Promise<any> {
        const products: any = await this.productUsecase.getProducts()
        return res.json(products)
    }

    @Get('product/:id')
    @ApiOperation({
        description: 'Get product based on its id'
    })
    @ApiBadRequestResponse()
    @ApiOkResponse()
    async getProductById(
        @Param('id') id: string,
        @Res() res: Response<any>
    ): Promise<any> {
        const product = await this.productUsecase.getProductById(id)
        return res.json(product)
    }

    @Post('')
    async createProduct(
        @Body() productData: CreateProductDto,
        @Res() res: Response<any>
    ): Promise<any> {
        const product = await this.productUsecase.createProduct(productData)
        return res.json(product)
    }

    @Delete('product/:id')
    @ApiOperation({
        description: 'Delete product from database'
    })
    @ApiBadRequestResponse({
        description: 'Cannot delete product'
    })
    @ApiOkResponse()
    async deleteProduct(
        @Param('id') id: string,
        @Res() res: Response<void>
    ): Promise<Response<void>> {
        await this.productUsecase.deleteProduct(id)
        return res.sendStatus(HttpStatus.OK)
    }
}
