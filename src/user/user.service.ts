import { Injectable } from '@nestjs/common';
import { PartialModelObject } from 'objection';
import { User } from '../db/model/user.model';

@Injectable()
export class UserService {

    async createNewUser(data) {
        try {
            const res = await User.query().insert({
                name: data.name,
                email: data.email,
                phoneNumber: data.phoneNumber,
                dateOfBirth: data.dateOfBirth,
                gender: data.gender,
                password: data.password,
            } as PartialModelObject<User>);
            return res;
        } catch (error) { return error; }
    }

    async getAllUsers() {
        try {
            const res = await User.query().where({ isDeleted: 0 });
            return res;
        } catch (error) { return error; }
    }

    async updateUser(data: any) {
        try {
            const res = await User.query().patchAndFetchById(data.id, {
                name: data.name,
                email: data.email,
                dateOfBirth: data.dateOfBirth,
                phoneNumber: data.phoneNumber,
                gender: data.gender,
                password: data.password
            } as PartialModelObject<User>);
            return res;
        } catch (error) { return error; }
    }

    async deleteUserById(id: any) {
        try {
            const res = await User.query().patchAndFetchById(id, { isDeleted: 1 } as PartialModelObject<User>)
            return res;
        } catch (error) {
            return error;
        }
    }
}
