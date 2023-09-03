import { Injectable } from '@nestjs/common';
import { User } from 'src/users/type';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            'id': 1,
            'username': "rick",
            'password': "rick",
        },
        {
            'id': 2,
            'username': "mike",
            'password': "mike",
        },
        {
            'id': 3,
            'username': "walter",
            'password': "walter",
        }
    ];
    getUsers() {
        return this.users;
    }

    getUserByName(username: string) {
        return this.users.find((user) => user.username === username);
    }
    getUserById(id: number) {
        return this.users.find((user) => user.id === id);
    }
}
