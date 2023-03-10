import { Injectable } from "@nestjs/common";
import { User } from "../db/model/user.model";
import { BCrypt }from "../utils/bcrypt";

@Injectable()
export class AuthenticationService {

    public bcrypt: BCrypt;

    async login(mail: string, password: string) {
        try {
            if (!mail || !password) {
                return { errors: [{ type: 'Missing Fields', message: 'Please give the proper email and password' }] };
            }

            const user = await User.query().findOne('email', mail);

            if (!user) {
                return { errors: [{ type: 'No User', message: 'There is no such user with this email' }] };
            }

            if ( !await this.bcrypt.verifyPassword(password, user.password) ) {
                return { errors: [{ type: 'Incorrect password', message: 'Incorrect password' }] };
            }

            const userDetails = {
                name: user.name,
                email: user.email,
                dob: user.dateOfBirth
            }
            return await this.bcrypt.genToken(userDetails);

        } catch (error) {            
            return { errors: [{ type: 'Catch', message: error }] };
        }
    }

    async signup(payload) {
        try {
            const hash = this.bcrypt.hashPassword(payload.password);

            payload.password = hash;

            const user = User.query().insert(payload).then().catch();

            if (user) {
                return { message: 'User Created Successfully', isTrue: true };
            }

            return { message: 'Create User Failed', isTrue: false };

        } catch (error) {
            return { errors: [{ type: 'Catch', message: error }] }
        }
    }
}