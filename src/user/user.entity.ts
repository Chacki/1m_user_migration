import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  firstName: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  lastName: string;

  @Column({ type: 'int', nullable: false })
  age: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  gender: string;

  @Column({ type: 'boolean', default: false})
  hasproblems: boolean;
}
