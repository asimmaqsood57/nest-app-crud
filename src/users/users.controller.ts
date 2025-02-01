import { Body, Controller, Get , Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user/user';

@Controller('users')
export class UsersController {

    constructor(
        private readonly userService: UsersService
    ){}

    @Post()
    create(@Body() user : Partial<User>): Promise<User>{
        return this.userService.create(user);
    }

    @Get()
    findAll(): Promise<User[]>{
        return this.userService.findAll();
    }

    @Get(":id")
    findOne(@Param('id') id: number): Promise<User | null>{
        return this.userService.findOne(id);
    }


    
    @Get()
    getUsers(){
        return [
            {
                id: 1,
                name: "John Doe"
            }
        ]
    }
}
