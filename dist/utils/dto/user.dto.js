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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUser = exports.CreateUser = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUser {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'User name',
        default: 'Guru'
    }),
    __metadata("design:type", String)
], CreateUser.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Email',
        default: 'guru@mail.com'
    }),
    __metadata("design:type", String)
], CreateUser.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'User Phone Number',
        default: '1213456578'
    }),
    __metadata("design:type", String)
], CreateUser.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'User Date of Birth',
        default: '12-13-1999'
    }),
    __metadata("design:type", String)
], CreateUser.prototype, "dateOfBirth", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Gender',
        default: 'Male'
    }),
    __metadata("design:type", String)
], CreateUser.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'User password',
        default: 'abc123'
    }),
    __metadata("design:type", String)
], CreateUser.prototype, "password", void 0);
exports.CreateUser = CreateUser;
class UpdateUser {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'User Id',
        default: '1452'
    }),
    __metadata("design:type", String)
], UpdateUser.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'User name',
        default: 'Guru'
    }),
    __metadata("design:type", String)
], UpdateUser.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'User Email',
        default: 'guru@mail.com'
    }),
    __metadata("design:type", String)
], UpdateUser.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'User Phone Number',
        default: '124536789'
    }),
    __metadata("design:type", String)
], UpdateUser.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'User Date of birth',
        default: '12-13-1999'
    }),
    __metadata("design:type", String)
], UpdateUser.prototype, "dateOfBirth", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Gender',
        default: 'Male'
    }),
    __metadata("design:type", String)
], UpdateUser.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'User name',
        default: 'abc123'
    }),
    __metadata("design:type", String)
], UpdateUser.prototype, "password", void 0);
exports.UpdateUser = UpdateUser;
//# sourceMappingURL=user.dto.js.map