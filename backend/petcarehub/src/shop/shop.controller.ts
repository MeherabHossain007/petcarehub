import { Controller, Get } from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get() // Assuming you're fetching all Products
  async getAllProducts(): Promise<any[]> {
    return await this.shopService.getAll();
  }
}
