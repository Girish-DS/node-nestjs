"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const objection_1 = require("objection");
class User extends objection_1.Model {
    static get tableName() {
        return `user`;
    }
    static get idColumn() {
        return `id`;
    }
    ;
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
        };
    }
}
exports.User = User;
//# sourceMappingURL=user.model.js.map