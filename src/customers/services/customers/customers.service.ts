import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dto/createCustomer.dto';
import { Customer } from 'src/customers/types/customer';

@Injectable()
export class CustomersService {
    private customers: Customer[] = [
        {
            "id": 1,
            "email": "muhammed",
            "name": "Muhammed",
        },
        {
            "id": 2,
            "email": "bahadir",
            "name": "Bahadır",
        },
        {
            "id": 3,
            "email": "yildirim",
            "name": "Yıldırım",
        },
    ];
    findCustomerById(id: number): any {
        return this.customers.find((user) => user.id === id);
    }
    createCustomer(createCustomer: CreateCustomerDto) {
        this.customers.push(createCustomer);
    }
    getAllCustomers() {
        return this.customers;
    }
}
