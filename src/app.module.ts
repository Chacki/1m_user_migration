import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { appConfig, postgresConfig } from './config/config';
import {UserModule} from "./user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, postgresConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [postgresConfig.KEY],
      useFactory: (config: ConfigType<typeof postgresConfig>) => {
        return {
          type: 'postgres',
          ...config,
          synchronize: false,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
        };
      },
    }),
    UserModule
  ],
})
export class AppModule {}
