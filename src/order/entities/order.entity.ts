import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { LineItem } from './line-item.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('varchar', { nullable: false })
  status: string;

  @Column('varchar', { nullable: true })
  shippingProvider: string;

  @Column('varchar', { nullable: true })
  trackingId: string;

  @OneToMany(() => LineItem, (lineItem) => lineItem.order)
  lineItems: LineItem[];
}