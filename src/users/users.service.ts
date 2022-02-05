import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface'
import { randomUUID } from "crypto";


@Injectable()
export class UsersService {
    private users: User[] = [];

    create(user: User) {
        user.id = randomUUID()
        this.users.push(user)
        return user.id
    }

    update(id: string, newData: User) {
        let user = this.users.find(item => item.id === id)
        user = {...user, ...newData}
        return user
    }

    delete(id: string) {
        this.users = this.users.filter(item => item.id === id)
        return id
    }

    findOne(id: string): User {
        return this.users.find(item => item.id === id)
    }

    findAll(): User[] {
        return this.users
    }
}