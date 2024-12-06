import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { LineItem } from './line-item.entity';

export const OrderStatus = {
  Created: 'created',
  Processing: 'processing',
  Canceled: 'canceled',
  Delivered: 'delivered',
} as const;
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('varchar', { nullable: false })
  status: OrderStatus;

  @Column('varchar', { nullable: true })
  shippingProvider: string;

  @Column('varchar', { nullable: true })
  trackingId: string;

  @OneToMany(() => LineItem, (lineItem) => lineItem.order, {
    onDelete: 'CASCADE',
  })
  lineItems: LineItem[];
}
