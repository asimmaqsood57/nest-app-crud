import { Body, Controller, Delete, Get , Param, Post, Put } from '@nestjs/common';
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

    @Put(":id")
    update(@Body() user: Partial<User> , @Param("id") id : number): Promise<User | null>{
        return this.userService.update(id , user);
    }

    @Delete(":id")
    delete(@Param("id") id : number): Promise<void>{
        return this.userService.delete(id);
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
