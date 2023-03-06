import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthenticationService {

    async login( mail: string, password: string ) {
        return { data: { mail: mail, password: password } }
    }

    async signup(payload) {}
}