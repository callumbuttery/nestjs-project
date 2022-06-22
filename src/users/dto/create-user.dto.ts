import { ApiProperty } from '@nestjs/swagger';

export class CreateUserData {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  age: number;
}
