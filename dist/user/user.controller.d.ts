import { Response } from 'express';
import { UserService } from './user.service';
import { CreateUser } from '../utils/dto/user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createNewUser(datum: CreateUser, res: Response): Promise<Response<any, Record<string, any>>>;
    getAllUsers(res: Response): Promise<Response<any, Record<string, any>>>;
    updateUser(datum: any, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteUserById(id: any, res: Response): Promise<Response<any, Record<string, any>>>;
}
