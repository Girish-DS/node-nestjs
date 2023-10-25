import * as bcrypt from "bcrypt";
import { sign } from 'jsonwebtoken';

export const verifyPassword = (password, saved) => {
    return bcrypt.compareSync(password, saved)
}
    
export const genToken = (details) => {
    return sign(details, process.env.HASH_KEY, { expiresIn: "60m" });
}

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    return await bcrypt.hash(password, salt);
}