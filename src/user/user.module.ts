import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserModel } from './user.model';

@Module({
  imports: [UserModel],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
