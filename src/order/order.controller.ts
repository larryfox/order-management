import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderById } from './pipes/order-by-id.pipe';
import { Order, OrderStatus } from './entities/order.entity';
import { ParseOrderStatus } from './pipes/order-status.pipe';
import { CreateOrderDto } from './dtos/create-order.dto';
import { UpdateOrderShippingDto } from './dtos/update-order-shipping.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@Body() input: CreateOrderDto) {
    await this.orderService.createOrder(input.lineItems);
  }

  @Patch(':id')
  async update(
    @Param('id', OrderById) order: Order,
    @Body() input: UpdateOrderShippingDto,
  ) {
    await this.orderService.updateOrderShipping(order, input);
  }

  @Post(':id/status/:status')
  async updateStatus(
    @Param('id', OrderById) order: Order,
    @Param('status', ParseOrderStatus) status: OrderStatus,
  ) {
    await this.orderService.updateOrderStatus(order, status);
  }

  @Delete(':id')
  async delete(@Param('id', OrderById) order: Order) {
    await this.orderService.deleteOrder(order);
  }
}
