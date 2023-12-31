import { Controller, Get } from '@nestjs/common';
import { ShopService } from './shop.service';
import { Shop } from 'src/models/shop.models';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get() // Assuming you're fetching all Products
  async getAllProducts(): Promise<any[] | Shop> {
    return await this.shopService.getAll();
  }
}
