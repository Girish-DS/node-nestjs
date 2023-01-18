"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbModule = void 0;
const common_1 = require("@nestjs/common");
const knex_1 = require("knex");
const objection_1 = require("objection");
const user_model_1 = require("../user/user.model");
const models = [user_model_1.UserModel];
const modelProviders = models.map((model) => ({
    provide: model.name,
    useValue: model,
}));
const providers = [
    ...modelProviders,
    {
        provide: 'KnexConnection',
        useFactory: async () => {
            const db = (0, knex_1.knex)({
                client: 'mysql',
                version: '8.0.29',
                connection: {
                    host: "localhost",
                    user: "root",
                    database: "practice",
                    password: "password",
                    port: 3306
                }
            });
            db.raw('select 1+1 as result').then(() => {
                console.log('DB connected');
            }).catch(e => {
                console.log("Database Error", e);
            });
            objection_1.Model.knex(db);
            return db;
        },
    },
];
let DbModule = class DbModule {
};
DbModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [...providers],
        exports: [...providers],
    })
], DbModule);
exports.DbModule = DbModule;
//# sourceMappingURL=db.module.js.map