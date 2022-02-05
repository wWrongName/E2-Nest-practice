import {Field, ObjectType} from "@nestjs/graphql"
import {IsUUID, IsString} from "class-validator"


@ObjectType()
export class User {
    @Field({ nullable: false })
    @IsUUID("4")
    id?: string;

    @Field({ nullable: true })
    @IsString()
    firstname: string;

    @Field({ nullable: true })
    @IsString()
    lastname: string;
}
