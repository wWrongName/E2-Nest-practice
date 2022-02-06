import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module'
import { GraphQLModule } from "@nestjs/graphql";


@Module({
    imports: [
        // GraphQLModule.forRoot({
        //     subscriptions : {
        //         "graphql-ws": true
        //     }
        // }),
        UsersModule
    ]
})

export class AppModule {}
