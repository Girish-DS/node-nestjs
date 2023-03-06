"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("./user.model");
let UserService = class UserService {
    async createNewUser(data) {
        try {
            const res = await user_model_1.UserModel.query().insert({
                name: data.name,
                email: data.email,
                phoneNumber: data.phoneNumber,
                dateOfBirth: data.dateOfBirth,
                gender: data.gender,
                password: data.password,
            });
            return res;
        }
        catch (error) {
            return error;
        }
    }
    async getAllUsers() {
        try {
            const res = await user_model_1.UserModel.query().where({ isDeleted: 0 });
            return res;
        }
        catch (error) {
            return error;
        }
    }
    async updateUser(data) {
        try {
            const res = await user_model_1.UserModel.query().patchAndFetchById(data.id, {
                name: data.name,
                email: data.email,
                dateOfBirth: data.dateOfBirth,
                phoneNumber: data.phoneNumber,
                gender: data.gender,
                password: data.password
            });
            return res;
        }
        catch (error) {
            return error;
        }
    }
    async deleteUserById(id) {
        try {
            const res = await user_model_1.UserModel.query().patchAndFetchById(id, { isDeleted: 1 });
            return res;
        }
        catch (error) {
            return error;
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map