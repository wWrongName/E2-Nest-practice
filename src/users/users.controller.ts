import { Controller, Get, Post, Put, Patch, Delete, Body, Param } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

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
