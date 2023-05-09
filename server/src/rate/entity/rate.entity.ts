import { Ticket } from "src/ticket/entity/ticket.entity";
import { User } from "src/user/entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rate {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @ManyToOne(() => User, (user) => user.rates)
    user: User

    @ManyToOne(() => Ticket, (ticket) => ticket.rates)
    ticket: Ticket
}