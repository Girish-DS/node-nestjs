import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { JwtService } from "@nestjs/jwt"

@Injectable()
export class AuthGuard implements CanActivate {

    constructor (private jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const req = context.switchToHttp().getRequest();
            const token = this.extractTokenFromHeader(req);
            if (!token) {
                throw new UnauthorizedException();
            }
            const payload = await this.jwtService.verifyAsync(
                token,
                {
                    secret: process.env.HASH_KEY
                }
            )

            req['user'] = payload;

            return true;
        } catch (error) {
            throw new UnauthorizedException();
        }
    }

    private extractTokenFromHeader(req: Request): any {
        const [ type, token ] = req?.headers?.authorization.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}