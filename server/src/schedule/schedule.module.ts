import { Module } from '@nestjs/common';
import { ScheduleController } from './controllers/schedule.controller';
import { ScheduleService } from './services/schedule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schedule } from './entity/schedule.entity';
import { Car } from 'src/car/entity/car.entity';
import { ScheduleToCar } from './entity/schedule_car.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Schedule, Car, ScheduleToCar])
    ],
    controllers: [ScheduleController],
    providers: [ScheduleService],
})
export class ScheduleModule {};