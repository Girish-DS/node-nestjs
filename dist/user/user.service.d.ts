import { ModelClass } from 'objection';
import { UserModel } from './user.model';
export declare class UserService {
    private Model;
    constructor(Model: ModelClass<UserModel>);
    createNewUser(data: any): Promise<any>;
    getAllUsers(): Promise<any>;
    updateUser(data: any): Promise<any>;
    deleteUserById(id: any): Promise<any>;
}
