import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        username: process.env.USER,
        host: process.env.HOST,
        database: process.env.DATABASE,
        password: process.env.DB_PSWD,
        synchronize: true,
        autoLoadEntities: true,
        logging: true,
      }),
    }),
    UserModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
