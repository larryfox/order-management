import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order } from './entities/order.entity';
import { LineItem } from './entities/line-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order, LineItem]), ProductModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
