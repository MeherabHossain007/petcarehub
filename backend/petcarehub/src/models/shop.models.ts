import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as readline from 'readline';

@Entity('shop')
export class Shop {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  readonly id?: number;

  @Column('varchar', { length: 255, name: 'title', nullable: false })
  readonly title: string;

  @Column('varchar', { length: 255, name: 'price', nullable: false })
  readonly price: string;

  @Column('varchar', { length: 800, name: 'description', nullable: false })
  readonly description: string;

  @Column('varchar', { length: 255, name: 'stock', nullable: false })
  readonly stock: string;

  @Column('varchar', { length: 500, name: 'photo', nullable: false })
  readonly photo: string;
}
