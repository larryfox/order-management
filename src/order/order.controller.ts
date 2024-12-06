import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dtos/create-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@Body() input: CreateOrderDto) {
    await this.orderService.createOrder(input.lineItems);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    //this.orderService.updateOrder(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    //this.orderService.deleteOrder(id);
  }
}
