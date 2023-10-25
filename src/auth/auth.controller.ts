import { Body, Controller, Get, HttpStatus, Logger, Post, Query, Res } from "@nestjs/common";
import { ApiBody, ApiQuery, ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { CreateUser } from "../utils/dto/user.dto";
import { AuthenticationService } from "./auth.service";

@ApiTags('auth')
@Controller()
export class Authentication {

    private logger = new Logger();
    
    constructor ( private authService: AuthenticationService ) {}

    @Get('login')
    @ApiQuery({
        name: 'mail',
        type: 'string',
        required: true
    })
    @ApiQuery({
        name: 'password',
        type: 'string',
        required: true
    })
    async login( @Query('mail') mail: string, @Query('password') password: string, @Res() res: Response ) {

        this.logger.log('Starting to Authenticate the user Controller :: { start }');

        const auth = await this.authService.login(mail, password);

        if( auth && auth ) {
            return res.status(HttpStatus.OK).send(auth);
        }

        return res.status(HttpStatus.BAD_REQUEST).send(auth);
    }

    @Post('signup')
    @ApiBody({
        type: () => CreateUser,
        description: 'Request payload to create new user.'
    })
    async signup( @Body() userDetails: CreateUser, @Res() res: Response ) {

        this.logger.log('Starting to create a user Controller :: { start }');

        const user = await this.authService.signup(userDetails);

        if( user ) {
            return res.status(HttpStatus.CREATED).send(user);
        }

        return res.status(HttpStatus.BAD_REQUEST).send(user);
    }
}
