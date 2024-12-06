import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { Order } from '../entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderById implements PipeTransform<string, Promise<Order>> {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
  ) {}

  async transform(value: string): Promise<Order> {
    const order = await this.orderRepo.findOneBy({ id: Number(value) });
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }
}
