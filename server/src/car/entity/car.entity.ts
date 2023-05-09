import { ScheduleToCar } from "src/schedule/entity/schedule_car.entity";
import { Seat } from "src/seat/entity/seat.entity";
import { User } from "src/user/entity/user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    type: string

    @Column({
        default: 10
    })
    toltalRow: number

    @Column()
    totalColumn: number

    @Column()
    numberOfFloor: number

    @Column({default: true})
    isActive: boolean

    @Column()
    phoneNumber: string

    @OneToOne(() => User)
    @JoinColumn()
    user: User

    @OneToMany(() => Seat, (seat) => seat.car)
    seats: Seat[]

    @OneToMany(() => ScheduleToCar, scheduleToCar => scheduleToCar.car)
    public scheduleToCars: ScheduleToCar[]
}