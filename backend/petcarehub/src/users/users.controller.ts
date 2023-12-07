import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO, UserCredentialDTO } from 'src/dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('login')
  userLogin(@Body() userCredential: UserCredentialDTO): any {
    return this.userService.userAuth(userCredential);
  }

  @Post('register')
  userRegister(@Body() createUserDTO: CreateUserDTO): any {
    return this.userService.createUser(createUserDTO);
  }
}
