import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class LineItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false })
  orderId: string;

  @Column('varchar', { nullable: false })
  name: string;

  @Column('varchar', { nullable: false })
  sku: string;

  @Column('int', { nullable: false })
  quantity: number;

  @Column('int', { nullable: false })
  price: number;

  @ManyToOne(() => Order, (order) => order.lineItems)
  order: Order;
}
