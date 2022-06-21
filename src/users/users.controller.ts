import { Controller, Get, Param } from '@nestjs/common';

// controller used to get all things user related

//localhost:3000/users
//localhost:3000/users/1

@Controller('users')
export class UsersController {
  // 1) returns a singular user;
  @Get()
  getUsers(): any {
    return [{ id: 0 }, { name: 'John' }];
  }

  // 2) Returns a user by id passed in
  //localhost:3000/users/1
  @Get(':id')
  //need to add the Param decorator to get the id
  getUsersById(@Param('id') id: string): any {
    //return the id we have passed in
    return [{ id: id }, { name: 'bob' }];
  }
}
