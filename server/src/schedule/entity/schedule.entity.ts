import { Address } from "src/address/entity/address.entity";
import { Ticket } from "src/ticket/entity/ticket.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ScheduleToCar } from "./schedule_car.entity";

@Entity()
export class Schedule {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number

    @Column()
    startTime: Date

    @Column()
    endTime: Date

    @Column()
    distance: string

    @Column({default: true})
    isActive: boolean

    @OneToMany(() => Ticket, (ticket) => ticket.schedule)
    tickets: Ticket[]

    @OneToMany(() => ScheduleToCar, scheduleToCar => scheduleToCar.schedule)
    public scheduleToCars: ScheduleToCar[]

    @ManyToOne(() => Address, address => address.scheduleDeparture)
    departureAddress: Address;

    @ManyToOne(() => Address, address => address.scheduleDestination)
    destinationAddress: Address;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}