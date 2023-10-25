"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvPath = void 0;
const path_1 = require("path");
function getEnvPath(dest) {
    const env = process.env.NODE_ENV;
    const filename = env ? `${env.trim()}.env` : 'development.env';
    const filePath = (0, path_1.resolve)(`${dest}/${filename}`);
    return filePath;
}
exports.getEnvPath = getEnvPath;
//# sourceMappingURL=env.helper.js.map