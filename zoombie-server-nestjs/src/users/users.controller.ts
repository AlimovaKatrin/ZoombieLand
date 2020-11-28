import {Controller, Get, Post, Body} from '@nestjs/common';
import {UsersService} from './user.service';
import {User} from '../interfaces/user.interface';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll()
    }

    @Post()
    async create(@Body() user: User) {
        this.userService.create(user)
    }

}
