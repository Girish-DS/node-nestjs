"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authentication = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("../utils/dto/user.dto");
const auth_service_1 = require("./auth.service");
let Authentication = class Authentication {
    constructor(authService) {
        this.authService = authService;
        this.logger = new common_1.Logger();
    }
    async login(mail, password, res) {
        this.logger.log('Starting to Authenticate the user Controller :: { start }');
        const auth = await this.authService.login(mail, password);
        if (auth && auth) {
            return res.status(common_1.HttpStatus.OK).send(auth);
        }
        return res.status(common_1.HttpStatus.BAD_REQUEST).send(auth);
    }
    async signup(userDetails, res) {
        this.logger.log('Starting to create a user Controller :: { start }');
        const user = await this.authService.signup(userDetails);
        if (user) {
            return res.status(common_1.HttpStatus.CREATED).send(user);
        }
        return res.status(common_1.HttpStatus.BAD_REQUEST).send(user);
    }
};
__decorate([
    (0, common_1.Get)('/:mail/:password'),
    (0, swagger_1.ApiParam)({
        name: 'mail',
        type: 'string',
        required: true
    }),
    (0, swagger_1.ApiParam)({
        name: 'password',
        type: 'string',
        required: true
    }),
    __param(0, (0, common_1.Param)('mail')),
    __param(1, (0, common_1.Param)('password')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], Authentication.prototype, "login", null);
__decorate([
    (0, common_1.Post)('signup'),
    (0, swagger_1.ApiBody)({
        type: () => user_dto_1.CreateUser,
        description: 'Request payload to create new user.'
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUser, Object]),
    __metadata("design:returntype", Promise)
], Authentication.prototype, "signup", null);
Authentication = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [auth_service_1.AuthenticationService])
], Authentication);
exports.Authentication = Authentication;
//# sourceMappingURL=auth.controller.js.map