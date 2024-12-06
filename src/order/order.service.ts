import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LineItem } from './entities/line-item.entity';
import { Order, OrderStatus } from './entities/order.entity';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
    @InjectRepository(LineItem)
    private readonly lineItemRepo: Repository<LineItem>,
    private readonly productService: ProductService,
  ) {}

  async createOrder(
    lineItems: Pick<LineItem, 'sku' | 'quantity'>[],
  ): Promise<Order> {
    const order = this.orderRepo.create({
      lineItems: [],
      status: OrderStatus.Processing,
    });

    for (const { sku, quantity } of lineItems) {
      const product = await this.productService.fetchProduct(sku);
      const lineItem = this.lineItemRepo.create({
        sku,
        quantity,
        price: product.price,
        name: product.name,
      });
      order.lineItems.push(lineItem);
    }

    return this.orderRepo.save(order);
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
