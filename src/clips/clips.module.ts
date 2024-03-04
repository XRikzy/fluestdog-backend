import { Module } from '@nestjs/common';
import { ClipsService } from './service/clips.service';
import { ClipsController } from './controllers/clips.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClipsSchema } from './schemas/clips.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Clips', schema: ClipsSchema }]),
  ],
  controllers: [ClipsController],
  providers: [ClipsService],
})
export class ClipsModule {}
