import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, UseFilters, UseInterceptors } from '@nestjs/common';
import { UserNotFoundException } from 'src/users/exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from 'src/users/filters/HttpExceptiion.filter';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/type';

@Controller('users')
export class UsersController {
    constructor(@Inject('userservice') private readonly userService: UsersService) { }


    @Get('/username/:username')
    //Serializedın çalışması için bu dekoratörü eklememiz gerekiyor
    @UseInterceptors(ClassSerializerInterceptor)
    getUserByName(@Param('username') param: string) {
        const user = this.userService.getUserByName(param);
        if (user) return new SerializedUser(user);
        else throw new HttpException('Not found', HttpStatus.BAD_REQUEST);
    }

    @UseFilters(HttpExceptionFilter)
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('id/:id')
    getById(@Param('id', ParseIntPipe) id: number) {
        const user = this.userService.getUserById(id);
        if (user) return new SerializedUser(user);
        else {
            throw new UserNotFoundException('Kulanıcı bulunamadı', 400);
        }
    }

}
