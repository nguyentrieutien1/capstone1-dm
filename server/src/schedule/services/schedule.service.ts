import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Schedule } from '../entity/schedule.entity';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { Car } from 'src/car/entity/car.entity';
import { ScheduleToCar } from '../entity/schedule_car.entity';
 
@Injectable()
export class ScheduleService {
    constructor(
        @InjectRepository(Schedule) private scheduleRepository: Repository<Schedule>,
        @InjectRepository(Car) private carRepository: Repository<Car>,
        @InjectRepository(ScheduleToCar) private scheduleToCarRepository: Repository<ScheduleToCar>
    ) {}

    async create(createScheduleDto: any): Promise<string>{
        await this.scheduleRepository.save(createScheduleDto)
        return "A new Schedule is created successfully"
    }

    async createCarOfSchedule(id: any, carId: any) {
        const schedule = await this.scheduleRepository.findOne({
            where: {id}
        })
          
        const car = await this.carRepository.findOne({
            where: {id: carId[0]}
        })
        const data = {
            schedule,
            car,
        }

        return this.scheduleToCarRepository.save(data)
    }

    async getAllScheduleMoreThanOrEqualCurrentDate(): Promise<Schedule[]> {
        const date = new Date()
        return this.scheduleRepository.find({
            relations: ['departureAddress', 'destinationAddress']
        });
    }

    async getAllSchedule(): Promise<Schedule[]> {
        // return this.scheduleRepository.find({
        //     where: {isActive: true}
        // });
        return this.scheduleRepository.find();
    }

    async getScheduleWithCar(scheduleId: any) {
        return this.scheduleToCarRepository.find({
            relations: ['car', 'schedule'],
            where: {
                schedule: {
                    id: scheduleId,
                },
            }
        })
    }

    async deleteCarInSchedule(scheduleId: any, carId: any) {
        return this.scheduleToCarRepository.delete({
            schedule: scheduleId,
            car: carId.carId
        })
    }

    async updateSchedule(scheduleId: any, updateScheduleDto: any) {
        return this.scheduleRepository.update(scheduleId, updateScheduleDto)
    }

    //Select schedule to member can booking ticket
    async getScheduleTicket(scheduleId: any) {
        return this.scheduleRepository.findOne({
            where: {id: scheduleId},
            relations: ['departureAddress', 'destinationAddress', 'tickets.seat', 'scheduleToCars.car.seats']
        })
    }
}