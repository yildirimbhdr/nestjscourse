import { MiddlewareConsumer, Module, NestModule, Req, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer.middleware';
import { CustomerExpireMiddleware } from './middlewares/customer-expire.middleware';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //Eğer forRoutesa direkt Controller nesnesi verilirse tüm routelar için middleware uygulanır
    //exclude fonksiyonu ile controllerın içerisinde belirlediğiniz routelar hariç tüm routelara
    //middleware uygulanır
    // consumer.apply(ValidateCustomerMiddleware).forRoutes(
    //   {
    //     path: 'customers/search/:id',
    //     method: RequestMethod.GET
    //   },
    // );

    consumer.apply(ValidateCustomerMiddleware, CustomerExpireMiddleware,).forRoutes(CustomersController);

  }
}
