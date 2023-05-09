import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Car } from "../entity/car.entity";
import { Repository } from "typeorm";
import { CreateCarDto } from "../dto/car.dto";

@Injectable()
export class CarService {
    constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

    async create(createCarDto: any): Promise<string> {
        await this.carRepository.insert(createCarDto)
        return "A new car is created successfully"
    }

    getOne(id: number) {
        return this.carRepository.findOne({
            where: {id},
            relations: ['user', 'seats']
        });
    }

    getAll() {
        return this.carRepository.find({
            relations: ['user']
        });
    }

    async update(id: number, updateCar: any): Promise<string> {
        await this.carRepository.update(id, updateCar)
        return "The car is updated successfully"
    }
}