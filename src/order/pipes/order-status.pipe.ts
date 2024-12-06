import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { OrderStatus } from '../entities/order.entity';

@Injectable()
export class ParseOrderStatus implements PipeTransform<string, OrderStatus> {
  transform(value: string): OrderStatus {
    switch (value) {
      case OrderStatus.Created:
      case OrderStatus.Canceled:
      case OrderStatus.Delivered:
      case OrderStatus.Processing:
        return value;
      default:
        throw new BadRequestException('Invalid order status');
    }
  }
}
