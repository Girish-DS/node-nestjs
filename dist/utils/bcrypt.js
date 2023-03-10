"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BCrypt = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
let BCrypt = class BCrypt {
    async verifyPassword(password, saved) {
        return bcrypt.compareSync(password, saved);
    }
    async genToken(details) {
        return jsonwebtoken_1.default.sign(details, process.env.HASH_KEY, { expiresIn: "60m" });
    }
    async hashPassword(password) {
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        return await bcrypt.hash(password, salt);
    }
};
BCrypt = __decorate([
    (0, common_1.Injectable)()
], BCrypt);
exports.BCrypt = BCrypt;
//# sourceMappingURL=bcrypt.js.map