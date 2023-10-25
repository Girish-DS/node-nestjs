import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUser {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: 'string',
        description: 'User name',
        default: 'Guru'
    })
    name: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: 'string',
        description: 'Email',
        default: 'guru@mail.com'
    })
    email: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: 'string',
        description: 'User Phone Number',
        default: '1213456578'
    })
    phoneNumber: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: 'string',
        description: 'User Date of Birth',
        default: '1999-12-13'
    })
    dateOfBirth: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: 'string',
        description: 'Gender',
        default: 'Male'
    })
    gender: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: 'string',
        description: 'User password',
        default: 'abc123'
    })
    password: string

}

export class UpdateUser {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: 'string',
        description: 'User Id',
        default: '1452'
    })
    id: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: 'string',
        description: 'User name',
        default: 'Guru'
    })
    name: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: 'string',
        description: 'User Email',
        default: 'guru@mail.com'
    })
    email: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: 'string',
        description: 'User Phone Number',
        default: '124536789'
    })
    phoneNumber: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: 'string',
        description: 'User Date of birth',
        default: '12-13-1999'
    })
    dateOfBirth: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: 'string',
        description: 'Gender',
        default: 'Male'
    })
    gender: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: 'string',
        description: 'User name',
        default: 'abc123'
    })
    password: string
}