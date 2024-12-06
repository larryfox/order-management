import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order/entities/order.entity';
import { LineItem } from './order/entities/line-item.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      synchronize: true,
      entities: [Order, LineItem],
    }),
    OrderModule,
  ],
})
export class AppModule {}
