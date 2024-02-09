import { IsInt, IsPositive, IsString, MinLength, isInt, isString } from "class-validator";

export class CreateProductDto {
    @IsInt()
    id:number
    @IsString()
    @MinLength(1)
    name:string;
    @IsString()
    description:string
    @IsInt()
    @IsPositive()
    price:number
    @IsInt()
    imageURL:string

}
