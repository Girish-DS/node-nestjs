export declare class BCrypt {
    verifyPassword(password: any, saved: any): Promise<any>;
    genToken(details: any): Promise<any>;
    hashPassword(password: any): Promise<string>;
}
