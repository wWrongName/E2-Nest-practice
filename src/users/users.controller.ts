import {Controller, Get, Post, Put, Delete, Body, Param, Inject} from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { ClientProxy } from "@nestjs/microservices";


@Controller('users')
export class UsersController {
    constructor(
        private userService: UsersService,
        @Inject("LOGS_SERVICE") private readonly client: ClientProxy
    ) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        let id = this.userService.create(createUserDto)
        return `Add new user ${id}`
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        let user = this.userService.findOne(id)
        return `Return user ${JSON.stringify(user, null, '\t')}`
    }

    @Get()
    findAll() {
        this.client.emit<any>("info", "findAll method")

        let users = this.userService.findAll()
        return `Return list of users (amount: ${users.length})`
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        let updated = this.userService.update(id, updateUserDto)
        return `Update user ${JSON.stringify(updated, null, '\t')}`
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        this.userService.delete(id)
        return `Delete item ${id}`
    }
}
