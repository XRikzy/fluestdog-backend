import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClipsService } from '../service/clips.service';
import { CreateClipDto } from '../dto/create-clip.dto';
import { UpdateClipDto } from '../dto/update-clip.dto';

@Controller('clips')
export class ClipsController {
  constructor(private readonly clipsService: ClipsService) {}

  @Post()
  create(@Body() createClipDto: CreateClipDto) {
    return this.clipsService.create(createClipDto);
  }

  @Get()
  findAll() {
    return this.clipsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.clipsService.findOne(_id);
  }

  @Patch(':id')
  update(@Param('id') _id: string, @Body() updateClipDto: UpdateClipDto) {
    return this.clipsService.update(_id, updateClipDto);
  }

  @Delete(':id')
  remove(@Param('id') _id: string) {
    return this.clipsService.remove(_id);
  }
}
