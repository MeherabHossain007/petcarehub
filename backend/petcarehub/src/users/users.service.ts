import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO, UserCredentialDTO } from 'src/dto/users.dto';
import { Users } from 'src/models/users.models';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) {}

  async getUser(email: string, password: string): Promise<Users> {
    try {
      const user = await this.userRepository.findOne({
        where: {
          email: email,
          password: password,
        },
      });
      return user;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }

  async userAuth(userCredential: UserCredentialDTO): Promise<boolean> {
    try {
      const user = await this.getUser(
        userCredential.email,
        userCredential.password,
      );
      if (user && user.name) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<boolean> {
    try {
      console.log(createUserDTO.name);
      console.log(createUserDTO.email);
      console.log(createUserDTO.password);
      const users = this.userRepository.create(createUserDTO);
      const result = this.userRepository.save(users);

      if (result) {
        return true; // Success indication
      } else {
        return false; // Failure indication
      }
    } catch (error) {
      console.error('Error creating user:', error);
      return false; // Return a failure indication in case of an error
    }
  }
}
