import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LocationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  website: string;

  @Column()
  phone: string;

  @Column({ default: '' })
  contactPerson: string;

  @Column()
  coordinates: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
