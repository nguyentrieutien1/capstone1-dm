import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Schedule } from './schedule.entity';
import { Car } from 'src/car/entity/car.entity';

@Entity()
export class ScheduleToCar {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Schedule, schedule => schedule.scheduleToCars)
    public schedule: Schedule

    @ManyToOne(() => Car, car => car.scheduleToCars)
    public car: Car    
}
