import { Model } from "objection";


export class User extends Model {

    name: string;
    email: string;
    dateOfBirth: string;
    password: string;

    static get tableName() {
        return `user`;
    }

    static get idColumn() {
        return `id`;
    };

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'email', 'password', 'phoneNumber'],
            properties: {
                id: {
                    description: "user id",
                    type: 'number'
                },
                name: {
                    type: 'string'
                },
                email: {
                    type: 'string'
                },
                phoneNumber: {
                    type: 'string'
                },
                dateOfBirth: {
                    type: 'string'
                },
                gender: {
                    type: 'string'
                },
                password: {
                    type: 'string'
                },
                isDeleted: {
                    type: 'number'
                },
            }
        }
    }
}