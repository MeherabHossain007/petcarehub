import { ApiProperty } from '@nestjs/swagger';

export class UserCredentialDTO {
  @ApiProperty({
    name: 'email',
    description: "User's Email",
    type: String,
    example: 'abc@bscse.uiu.ac.bd',
  })
  readonly email: string;

  @ApiProperty({
    name: 'password',
    description: "User's Password",
    type: String,
    example: '12345678',
  })
  readonly password: string;
}

export class CreateUserDTO {
  @ApiProperty({
    name: 'name',
    description: 'Name',
    type: String,
    example: 'Mr. ABC',
  })
  readonly name: string;

  @ApiProperty({
    name: 'email',
    description: 'Email',
    type: String,
    example: 'abc@bscse.uiu.ac.bd',
  })
  readonly email: string;

  @ApiProperty({
    name: 'password',
    description: 'Password',
    type: String,
    example: '12345678',
  })
  readonly password: string;
}
