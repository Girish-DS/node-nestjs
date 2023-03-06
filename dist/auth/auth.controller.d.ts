import { Response } from "express";
import { AuthenticationService } from "./auth.service";
export declare class Authentication {
    private authService;
    private logger;
    constructor(authService: AuthenticationService);
    login(mail: string, password: string, res: Response): Promise<Response<any, Record<string, any>>>;
    signup(): Promise<void>;
}
