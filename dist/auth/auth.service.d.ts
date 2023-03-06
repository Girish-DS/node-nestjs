export declare class AuthenticationService {
    login(mail: string, password: string): Promise<{
        data: {
            mail: string;
            password: string;
        };
    }>;
    signup(payload: any): Promise<void>;
}
