import { Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create() {
    this.orderService.createOrder([]);
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
