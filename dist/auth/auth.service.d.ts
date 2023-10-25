export declare class AuthenticationService {
    login(mail: string, password: string): Promise<{
        accessToken: string;
        errors?: undefined;
    } | {
        errors: {
            type: string;
            message: any;
        }[];
        accessToken?: undefined;
    }>;
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
