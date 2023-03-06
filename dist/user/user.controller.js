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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("./user.service");
const user_dto_1 = require("../utils/dto/user.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async createNewUser(datum, res) {
        try {
            const resp = await this.userService.createNewUser(datum);
            if (resp)
                return res.status(201).send(resp);
            return res.status(405).send(resp);
        }
        catch (error) {
            return res.status(400).send(error);
        }
    }
    async getAllUsers(res) {
        try {
            const data = await this.userService.getAllUsers();
            console.log(data);
            if (data)
                return res.status(200).send(data);
            return res.status(400).send(data);
        }
        catch (error) {
            return res.status(400).send([]);
        }
    }
    async updateUser(datum, res) {
        try {
            const data = await this.userService.updateUser(datum);
            return res.status(400).send(data);
        }
        catch (error) {
            return res.status(400).send(error);
        }
    }
    async deleteUserById(id, res) {
        try {
            const data = await this.userService.deleteUserById(id);
            if (data)
                return res.status(200).send(data);
            return res.status(400).send(data);
        }
        catch (error) {
            return res
                .status(400)
                .send({ errorMessage: 'Something went wrong', error });
        }
    }
};
__decorate([
    (0, common_1.Post)('createUser'),
    (0, swagger_1.ApiBody)({
        type: () => user_dto_1.CreateUser,
        description: 'response of the user details with required fields'
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Creating a new user' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUser, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createNewUser", null);
__decorate([
    (0, common_1.Get)('allUsers'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all the users list' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Put)('updateUser'),
    (0, swagger_1.ApiBody)({
        type: () => user_dto_1.UpdateUser,
        description: 'Request to Update the User details'
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Update the user' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)('deleteUserById/:id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'delete the user with id',
        type: String,
        required: true,
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Delete the user by Id' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUserById", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('user'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map