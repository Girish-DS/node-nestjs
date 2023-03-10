import { BCrypt } from "../utils/bcrypt";
export declare class AuthenticationService {
    bcrypt: BCrypt;
    login(mail: string, password: string): Promise<any>;
    signup(payload: any): Promise<{
        message: string;
        isTrue: boolean;
        errors?: undefined;
    } | {
        errors: {
            type: string;
            message: any;
        }[];
        message?: undefined;
        isTrue?: undefined;
    }>;
}
