import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shop } from 'src/models/shop.models';
import { Repository } from 'typeorm';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop) private readonly shopRepository: Repository<Shop>,
  ) {}

  async getAll(): Promise<any[]> {
    try {
      const product = await this.shopRepository.find();
      return product; // Return the array of products
    } catch (error) {
      console.error('Error occurred while fetching all Products:', error);
      return []; // Return an empty array in case of an error
    }
  }
}
