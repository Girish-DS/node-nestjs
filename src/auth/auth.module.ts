import { Module } from "@nestjs/common";
import { Authentication } from "./auth.controller";
import { AuthenticationService } from "./auth.service";

@Module({
    imports: [],
    providers: [ AuthenticationService ],
    controllers: [ Authentication ]
})
export class AuthModule {}