import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

// controller used to get all things user related

//localhost:3000/users
//localhost:3000/users/1

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // 1) returns a singular user;
  @Get('all')
  getAllUsers(): any {
    return this.usersService.findAll();
  }

  // 2) Returns a user by id passed in
  //localhost:3000/users/1
  @Get(':id')
  //need to add the Param decorator to get the id
  //We always expect id to be a string as it is being pulled from the url
  getUsersById(@Param('id') id: string): any {
    // call function inside of service
    return this.usersService.findById(Number(id));
  }
}
