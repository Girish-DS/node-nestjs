import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from '../db/model/user.model';

@Module({
  imports: [User],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule { }
