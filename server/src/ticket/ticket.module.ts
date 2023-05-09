import { Module } from '@nestjs/common';
import { TicketController } from './controllers/ticket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './entity/ticket.entity';
import { Seat } from 'src/seat/entity/seat.entity';
import { TicketService } from './services/ticket.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Ticket, Seat])
    ],
    controllers: [TicketController],
    providers: [TicketService],
})
export class TicketModule {};