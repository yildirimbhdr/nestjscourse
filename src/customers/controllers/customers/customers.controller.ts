import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Req, Res, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dto/createCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customerService: CustomersService) { }

    @Get(':id')
    getCustomer(@Param('id', ParseIntPipe) id: number,
        @Req() req: Request,
        @Res() res: Response
    ): any {
        const customer = this.customerService.findCustomerById(id);
        if (customer) {
            res.send(customer);
        } else {
            res.status(400).send({ msg: "Customer Not Found" });
        }
    }

    @Get('/search/:id')
    searchCustomerById(
        @Param('id', ParseIntPipe) id: number,
    ) {
        const customer = this.customerService.findCustomerById(id);
        if (customer) return customer;
        else throw new HttpException('Customer not found', HttpStatus.BAD_GATEWAY);
    }


    @Post('create')
    @UsePipes(ValidationPipe)
    createCustomer(@Body() createCustomer: CreateCustomerDto) {
        return this.customerService.createCustomer(createCustomer);
    }

    @Get('')
    getCustomers() {
        return this.customerService.getAllCustomers();
    }




}
