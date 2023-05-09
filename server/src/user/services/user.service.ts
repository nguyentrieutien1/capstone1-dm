import { Injectable, ForbiddenException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entity/user.entity";
import * as bcrypt from "bcrypt"
import { JwtService } from "@nestjs/jwt";
import { MailerServiceCustomer } from "src/mail/mail.service";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private jwtService: JwtService,
        private mailerService: MailerServiceCustomer,
    ) {}

    async create(user: any): Promise<any> {
        user.password = bcrypt.hashSync(user.password, 10)
        user.isActive = true
        try {
            await this.userRepository.save(user)
        } catch (error) {
            throw new ForbiddenException()
        }
        // return "A new user is created successfully"
    }

    async register(userDto: any): Promise<void> {
        const user = await this.userRepository.save(userDto);
        const payload = {username: user.username, sub: user.id}
        const token = await this.jwtService.signAsync(payload);
        await this.mailerService.sendMailRegister(user.email, token);
    }

    async confirmEmail(token: string) {
        const userInfor = await this.jwtService.verifyAsync(token)
        const user = await this.userRepository.findOneBy({id: userInfor.sub})
        user.isActive = true
        await this.userRepository.update(user.id, user)
    }

    findAll(): Promise<User[]> {
        return this.userRepository.find({
            relations: ['role'],
        });
    }

    async findOne(id: number): Promise<User> {
        return this.userRepository.findOne({
            where: {id},
            relations: ['role'],
        })
    }

    async findById(id: number): Promise<any> {
        return this.userRepository.findOneBy({id})
    }

    async disableOne(id: number): Promise<void> {
        const user = await this.userRepository.findOneBy({id})
        user.isActive = false
        await this.userRepository.update(id, user);
    }

    async findByUsername(username: string): Promise<User> {
        return this.userRepository.findOneBy({username})
    }

    async update(id: number, userUpdate: any): Promise<string> {
        if(!userUpdate.password) {
            await this.userRepository.update(id, userUpdate)
        } else {
            userUpdate.password = bcrypt.hashSync(userUpdate.password, 10)
            await this.userRepository.update(id, userUpdate)
        }
        return "User is updated successfully"
    }

    async updateByEmail(updatePasswordDto: any): Promise<void> {
        updatePasswordDto.password = bcrypt.hashSync(updatePasswordDto.password, 10)
        const user = await this.userRepository.findOne({
            where: {email: updatePasswordDto.email}
        })
        await this.userRepository.update(user.id, {password: updatePasswordDto.password})
    }
}