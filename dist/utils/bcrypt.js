"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = exports.genToken = exports.verifyPassword = void 0;
const bcrypt = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const verifyPassword = (password, saved) => {
    return bcrypt.compareSync(password, saved);
};
exports.verifyPassword = verifyPassword;
const genToken = (details) => {
    return (0, jsonwebtoken_1.sign)(details, process.env.HASH_KEY, { expiresIn: "60m" });
};
exports.genToken = genToken;
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    return await bcrypt.hash(password, salt);
};
exports.hashPassword = hashPassword;
//# sourceMappingURL=bcrypt.js.map