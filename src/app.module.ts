import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { DbModule } from './db/db.module';
import { RouterModule } from '@nestjs/core';
import { GatewayModule } from './gateway/gateway.module';
import { AuthModule } from './auth/auth.module';
import { getEnvPath } from './common/helper/env.helper';

/**
 * Import path from path
 */
const path = require('path');

/**
 * Variable to define the path to env files
 */
const dirPath = path.join(__dirname, '../src/common/envs');
/**
 * Variable to load env file path
 */
const envFilePath: string = getEnvPath(dirPath);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
    }),
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
export class AppModule { }
