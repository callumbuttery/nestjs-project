import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserData } from './dto/create-user.dto';
import { User } from './entities/user.entity';

// controller used to get all things user related

// ****ROUTES IN ORDER****
// 1) localhost:3000/users
// 2) localhost:3000/users/1
// 3) localhost:3000/users/create/callum

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // 1) returns a singular user;
  @Get('all')
  getAllUsers(): User[] {
    return this.usersService.findAll();
  }

  // 2) Returns a user by id passed in
  //localhost:3000/users/1
  @Get(':id')
  //need to add the Param decorator to get the id
  //We always expect id to be a string as it is being pulled from the url
  getUsersById(@Param('id') id: string): User {
    // call function inside of service
    return this.usersService.findById(Number(id));
  }

  // 3) Creates a new user
  @Post('create')
  createUser(@Body() body: CreateUserData): User {
    console.log('hitting control');
    return this.usersService.createUser(body);
  }
}
