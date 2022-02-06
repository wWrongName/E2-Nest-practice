import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ClientsModule, Transport } from "@nestjs/microservices";


@Module({
    imports: [ClientsModule.register([{
        name: 'LOGS_SERVICE',
        transport: Transport.RMQ,
        options: {
            urls: ['amqp://guest:guest@localhost:5672/info'],
            queue: 'logs_queue',
            queueOptions: {
                durable: false
            }
        }
    }])],
    controllers: [UsersController],
    providers: [UsersService]
})

export class UsersModule {}
