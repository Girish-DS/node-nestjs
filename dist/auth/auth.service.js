"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("../db/model/user.model");
const bcrypt_1 = require("../utils/bcrypt");
let AuthenticationService = class AuthenticationService {
    async login(mail, password) {
        try {
            if (!mail || !password) {
                return { errors: [{ type: 'Missing Fields', message: 'Please give the proper email and password' }] };
            }
            const user = await user_model_1.User.query().findOne('email', mail);
            if (!user) {
                return { errors: [{ type: 'No User', message: 'There is no such user with this email' }] };
            }
            if (!(0, bcrypt_1.verifyPassword)(password, user.password)) {
                return { errors: [{ type: 'Incorrect password', message: 'Incorrect password' }] };
            }
            const userDetails = {
                name: user.name,
                email: user.email,
                dob: user.dateOfBirth
            };
            return { accessToken: (0, bcrypt_1.genToken)(userDetails) };
        }
        catch (error) {
            console.log(error);
            return { errors: [{ type: 'Catch', message: error }] };
        }
    }
    async signup(payload) {
        try {
            const hash = await (0, bcrypt_1.hashPassword)(payload.password);
            payload.password = hash;
            const user = user_model_1.User.query().insert(payload).then().catch();
            if (user) {
                return { message: 'User Created Successfully', isTrue: true };
            }
            return { message: 'Create User Failed', isTrue: false };
        }
        catch (error) {
            return { errors: [{ type: 'Catch', message: error }] };
        }
    }
};
AuthenticationService = __decorate([
    (0, common_1.Injectable)()
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=auth.service.js.map