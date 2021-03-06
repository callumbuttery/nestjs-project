import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserData } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

// controller used to get all things user related

// ****ROUTES IN ORDER****

// Visit localhost:3000/ to access swagger docs to hit these apis

// 1) localhost:3000/users/all
// 2) localhost:3000/users/1
// 3) localhost:3000/users/create - Needs to be hit within postman / swagger docs
// 3) localhost:3000/users/all/query

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // 1) returns a singular user;
  @ApiOkResponse({ type: User, isArray: true })
  @Get('all')
  getAllUsers(): User[] {
    return this.usersService.findAll();
  }




  // 2) Returns a user by id passed in
  //localhost:3000/users/1
  @ApiOkResponse({ type: User, isArray: true })
  @Get(':id')
  //need to add the Param decorator to get the id
  //We always expect id to be a string as it is being pulled from the url
  getUsersById(@Param('id', ParseIntPipe) id: number): User {

    // call function inside of service
    const user = this.usersService.findById(id);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }



  // 3) Creates a new user
  @ApiCreatedResponse({ type: User })
  @Post('create')
  createUser(@Body() body: CreateUserData): User {
    console.log('hitting control');
    return this.usersService.createUser(body);
  }


  // 4) Query Users
  @Get('all/query')
  queryUsers(@Query('name') name: string): User[] {

    const users = this.usersService.queryUsers(name);

    if (!users) {
      throw new NotFoundException();
    }
    return users;
  }
}
