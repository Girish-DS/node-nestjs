import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from '../db/model/user.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [User,
  JwtModule.register({
    global: true,
    secret: process.env.HASH_KEY,
    signOptions: { expiresIn: '60m' }
  })],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule { }
