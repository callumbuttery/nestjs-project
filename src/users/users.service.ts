import { Injectable } from '@nestjs/common';
import { CreateUserData } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  //simulate a database
  private users: any[] = [
    { id: 1, name: 'bob' },
    { id: 2, name: 'jane' },
    { id: 3, name: 'joe' },
    { id: 4, name: 'jill' },
    { id: 5, name: 'jim' },
  ];

  findAll(): any[] {
    return this.users;
  }

  findById(id: number): any {
    return this.users.find((user) => user.id === id);
  }

  createUser(CreateUserData: CreateUserData) {
    const user = {
      id: this.users.length + 1,
      name: CreateUserData.name,
    };
    this.users.push(user);
    return user;
  }
}
