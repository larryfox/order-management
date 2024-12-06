import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create() {}

  @Patch(':id')
  update(@Param('id') id: string) {}

  @Delete(':id')
  delete(@Param('id') id: string) {}
}
