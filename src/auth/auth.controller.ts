import { Controller, Get, HttpStatus, Logger, Param, Post, Res } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { CreateUser } from "../utils/dto/user.dto";
import { AuthenticationService } from "./auth.service";

@ApiTags('auth')
@Controller()
export class Authentication {

    private logger = new Logger();
    
    constructor ( private authService: AuthenticationService ) {}

    @Get('/:mail/:password')
    @ApiParam({
        name: 'mail',
        type: 'string',
        required: true
    })
    @ApiParam({
        name: 'password',
        type: 'string',
        required: true
    })
    async login( @Param('mail') mail: string, @Param('password') password: string, @Res() res: Response ) {

        this.logger.log('Starting to authenticate the user :: { start }');

        const auth = await this.authService.login(mail, password);

        if( auth && auth.data ) {
            return res.status(HttpStatus.OK).send(auth);
        }

        return res.status(HttpStatus.BAD_REQUEST).send(auth);
    }

    @Post('signup')
    @ApiBody({
        type: () => CreateUser,
        description: 'Request payload to create new user.'
    })
    async signup() {}
}
