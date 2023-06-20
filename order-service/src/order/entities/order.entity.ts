import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

enum OrderStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  PLACED = 'shipped',
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  //   @ManyToOne(() => Customer, customer => customer.orders)
  //   customer: Customer;

  @Column()
  itemId: string = uuidv4();

  @Column()
  price: string;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.PLACED })
  order_status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
