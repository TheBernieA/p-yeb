import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class CreateProductDto {
    @ApiProperty({
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    public readonly name: String;

    @ApiProperty({
        required: true
    })
    @IsNotEmpty()
    @IsString()
    public readonly description: String;

    @ApiProperty({
        required: true
    })
    @IsString()
    @IsNotEmpty()
    public readonly image: String;
}