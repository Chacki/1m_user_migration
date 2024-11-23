import { DataSource, DataSourceOptions } from 'typeorm';

import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || 'user',
  password: process.env.POSTGRES_PASSWORD || 'password',
  database: process.env.POSTGRES_DB || 'db',
  synchronize: false,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  migrations: [`${__dirname}/migrations/*.ts`],
};

export const AppDataSource = new DataSource(config);

AppDataSource.initialize()
  .then(() => console.log(`Connected to Data Source!`))
  .catch((err) => {
    throw err;
  });
