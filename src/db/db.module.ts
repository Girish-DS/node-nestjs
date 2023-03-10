import { Global, Module } from '@nestjs/common';
import { knex } from 'knex';
import { Model } from 'objection'
import { User } from './model/user.model';


/**
 * Defines models array
 */
const models = [User];

/**
 * defines model providers
 * the models array is mapped to get all providers
 */
const modelProviders = models.map((model) => ({
  provide: model.name,
  useValue: model,
}));

/**
 * model provider array
 * defines the connection
 */
const providers = [
  ...modelProviders,
  {
    provide: 'KnexConnection',
    useFactory: async () => {
      const db = knex({
        client: 'mysql',
        version: '8.0.29',
        connection: {
          host: "localhost",
          user: "root",
          database: "practice",
          password: "password",
          port: 3306
        }
      });


      db.raw('select 1+1 as result').then(() => {
        console.log('DB connected');
      }).catch(e => {
        console.log("Database Error", e);
      });


      Model.knex(db);

      return db;
    },
  },
];


@Global()
@Module({
  providers: [...providers],
  exports: [...providers],
})
export class DbModule { }