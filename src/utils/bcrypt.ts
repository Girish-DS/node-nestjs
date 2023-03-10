import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

@Injectable()
export class BCrypt {

    async verifyPassword(password, saved): Promise<any> {
        return bcrypt.compareSync(password, saved)
    }
    
    async genToken(details): Promise<any> {
        return jwt.sign(details, process.env.HASH_KEY, {expiresIn: "60m"});
    }

    async hashPassword(password): Promise<string> {
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        return await bcrypt.hash(password, salt);
    }

}