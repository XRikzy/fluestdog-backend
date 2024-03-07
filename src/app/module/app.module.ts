import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/module/auth.module';
import { ClipsModule } from 'src/clips/clips.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot('mongodb+srv://apirestrb.gzrimjk.mongodb.net/', {
      auth: {
        username: 'ricardobarrett',
        password: 'adminricardo123',
      },
      autoIndex: true,
    }),
    ClipsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
