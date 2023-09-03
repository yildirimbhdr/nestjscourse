import { Module } from '@nestjs/common';
import { UsersController } from './controller/users/users.controller';
import { UsersService } from './services/users/users.service';




@Module({
  controllers: [UsersController],
  providers: [{
    'provide': 'userservice',
    'useClass': UsersService,
  }]
})
export class UsersModule { }
