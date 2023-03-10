import { Model } from "objection";
export declare class User extends Model {
    name: string;
    email: string;
    dateOfBirth: string;
    password: string;
    static get tableName(): string;
    static get idColumn(): string;
    static get jsonSchema(): {
        type: string;
        required: string[];
        properties: {
            id: {
                description: string;
                type: string;
            };
            name: {
                type: string;
            };
            email: {
                type: string;
            };
            phoneNumber: {
                type: string;
            };
            dateOfBirth: {
                type: string;
            };
            gender: {
                type: string;
            };
            password: {
                type: string;
            };
            isDeleted: {
                type: string;
            };
        };
    };
}
