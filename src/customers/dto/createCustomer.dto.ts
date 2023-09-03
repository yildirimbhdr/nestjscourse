import { IsEmail, IsNotEmpty, IsNumber, IsNumberString, ValidateNested } from "class-validator"
import { CreateAddressDto } from "./createAddressDto"
import { Type } from "class-transformer"

export class CreateCustomerDto {
    @IsNumberString()
    id: number

    @IsNotEmpty()
    name: string

    @IsEmail()
    email: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CreateAddressDto)
    address: CreateAddressDto
}