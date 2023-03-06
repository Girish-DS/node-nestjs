import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DbModule } from './db/db.module';
import { RouterModule } from '@nestjs/core';
import { GatewayModule } from './gateway/gateway.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'user',
        module: UserModule,
      },
      {
        path: 'auth',
        module: AuthModule
      }
    ]),
    UserModule,
    AuthModule,
    GatewayModule,
    DbModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
