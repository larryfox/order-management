import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LineItem } from './entities/line-item.entity';
import { Order, OrderStatus } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
    @InjectRepository(LineItem)
    private readonly lineItemRepo: Repository<LineItem>,
  ) {}

  async createOrder(
    lineItems: Pick<LineItem, 'sku' | 'quantity'>[],
  ): Promise<Order> {
    const order = this.orderRepo.create();
    await this.orderRepo.save(order);
    // todo: add orderId to each lineItem, fetch cost from inventory service
    await this.lineItemRepo.save(lineItems);
    return order;
  }

  async updateOrderStatus(order: Order, status: OrderStatus) {
    await this.orderRepo.update(order.id, { status: status });
    return this.orderRepo.findOneBy({ id: order.id });
  }

  async updateOrderShipping(
    order: Order,
    updates: Pick<Order, 'trackingId' | 'shippingProvider'>,
  ): Promise<Order | null> {
    await this.orderRepo.update(order.id, updates);
    return this.orderRepo.findOneBy({ id: order.id });
  }

  async deleteOrder(order: Order): Promise<void> {
    await this.orderRepo.delete(order.id);
  }
}
