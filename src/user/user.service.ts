import { Inject, Injectable } from '@nestjs/common';
import { ModelClass } from 'objection';
import { UserModel } from './user.model';

@Injectable()
export class UserService {

    constructor (
        @Inject('UserModel') private Model: ModelClass<UserModel>
    ) {}

    async createNewUser(data) {
        try {
            const res = await this.Model.query().insert({
                name: data.name,
                email: data.email,
                phoneNumber: data.phoneNumber,
                dateOfBirth: data.dateOfBirth,
                gender: data.gender,
                password: data.password,
            });
            return res;
        } catch (error) { return error; }
    }

    async getAllUsers() {
        try {
            const res = await this.Model.query().where({ isDeleted: 0 });          
            return res;
        } catch (error) { return error; }
    }

    async updateUser(data: any) {
        try {
            const res = await this.Model.query().patchAndFetchById(data.id, {
                name: data.name,
                email: data.email,
                dateOfBirth: data.dateOfBirth,
                phoneNumber: data.phoneNumber,
                gender: data.gender,
                password: data.password 
            });
            return res;
        } catch (error) { return error; }
    }

    async deleteUserById(id: any) {
        try {
            const res = await this.Model.query().patchAndFetchById(id, { isDeleted: 1 })
            return res;
        } catch (error) {
            return error;
        }
    }
}
