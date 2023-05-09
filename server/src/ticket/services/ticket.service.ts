import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Ticket } from "../entity/ticket.entity";
import { Repository } from "typeorm";
import { CreateTicketDto } from "../dto/ticket.dto";

@Injectable()
export class TicketService {
    constructor(
        @InjectRepository(Ticket) private ticketRepository: Repository<Ticket>,
    ) {}
    
    async create(scheduleId: any, createTicketDto: CreateTicketDto, userId: any): Promise<void> {
        

        // const ticketInfor = await this.ticketRepository.save(ticket)

        // const ticketId = ticketInfor
        const seats = createTicketDto.seats

        for (let i = 0; i < seats.length; i++) {
            // const ticket_seat = new TicketToSeat()

            // ticket_seat.seat_status = "fullfill"
            // ticket_seat.ticket = ticketId
            // ticket_seat.seat = seats[i]

            // await this.ticketToSeatRepository.save(ticket_seat)
            const ticket = new Ticket()

            ticket.totalMoney = createTicketDto.totalMoney
            ticket.fullname = createTicketDto.fullName
            ticket.phoneNumber = createTicketDto.phoneNumber
            ticket.email = createTicketDto.email
            ticket.city = createTicketDto.city
            ticket.district = createTicketDto.district
            ticket.user = userId
            ticket.schedule = scheduleId
            ticket.seat = seats[i]
            
            await this.ticketRepository.save(ticket)
        }
    }
    
    getAll(): Promise<Ticket[]> {
        return this.ticketRepository.find({
            relations: ['seat', 'schedule', 'user']
        })
    }

    getOne(ticketId: any): Promise<Ticket> {
        return this.ticketRepository.findOne({
            where: {id: ticketId},
            relations: ['user', 'seat', 'schedule', 'schedule.departureAddress', 'schedule.destinationAddress']
        })
    }

    getTicketByUser(userId: any): Promise<Ticket[]> {
        return this.ticketRepository.find({
            where: {user: userId},
            relations: ['schedule', 'seat', 'schedule.departureAddress', 'schedule.destinationAddress']
        })
    }

    //Change status ticket by driver, when driver click done in schedule
    async updateStatusByDriver(scheduleId: number) {
        const tickets = await this.ticketRepository.find({
            where: {schedule: {
                id: scheduleId
            }}
        })

        tickets.forEach(async ticket => {
            await this.ticketRepository.update(ticket.id, {status: "complete"})
        })
    }

    async cancelTicket(ticketId: number) {
        const ticket = await this.ticketRepository.findOne({
            where: {id: ticketId},
            relations: ['schedule']
        })

        const now = new Date()
        const startTime = new Date(ticket.schedule.startTime)
        const updateDate = new Date(startTime.getTime() - 86400000)
        if(now > updateDate) {
            return "You can not cancel this ticket because it only has 1 day left to depart"
        } else {
            await this.ticketRepository.update(ticketId, {status: "cancelled"})
        }
    }

    async statisticByUser(year: number): Promise<any> {
        const queryBiulder = this.ticketRepository.createQueryBuilder('ticket')
        queryBiulder
            .select('ticket.user', 'user')
            .addSelect('SUM(ticket.totalMoney)', 'money')
            .where(`EXTRACT(YEAR FROM ticket.created_at) = :year`, { year })
            .andWhere("ticket.status = :status", {status: "completed"})
            .groupBy('ticket.user')
            .orderBy('money', "DESC")
            .limit(10)
        const results = await queryBiulder.getRawMany();
        return results;
    }

    async statisticByMonth(year: number): Promise<any> {
        const queryBiulder = this.ticketRepository.createQueryBuilder('ticket')
        queryBiulder
            .select('EXTRACT(MONTH FROM ticket.created_at)', 'month')
            .addSelect('SUM(ticket.totalMoney)', 'total')
            .where(`EXTRACT(YEAR FROM ticket.created_at) = :year`, { year })
            .andWhere("ticket.status = :status", {status: "completed"})
            .groupBy('month')
            .orderBy('total', "DESC")
        const results = await queryBiulder.getRawMany();
        return results;
    }
}