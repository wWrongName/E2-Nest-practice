import {Mutation, Query, Resolver} from "@nestjs/graphql"
import {User} from "./models/users.model"
import {UsersService} from "./users.service"
import {Param, ParseUUIDPipe} from "@nestjs/common"


@Resolver(of => User)
export class UsersResolver {
    constructor(private usersService: UsersService) {}

    @Query(returns => User, {name : "user"})
    async findOne(@Param('id', new ParseUUIDPipe({version : "4"})) id: string) {
        return this.usersService.findOne(id)
    }

    @Query(returns => [User], {name : "users"})
    async findAll() {
        return this.usersService.findAll()
    }

    @Mutation("create")
    async createUser(user: User) {
        return this.usersService.create(user)
    }

    @Mutation("update")
    async updateUser(@Param('id', new ParseUUIDPipe({version : "4"})) id: string, user: User) {
        return this.usersService.update(id, user)
    }

    @Mutation("delete")
    async deleteUser(@Param('id', new ParseUUIDPipe({version : "4"})) id: string) {
        return this.usersService.delete(id)
    }
}