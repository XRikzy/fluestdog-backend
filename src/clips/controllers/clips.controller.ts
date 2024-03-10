import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res
} from '@nestjs/common'
import { ClipsService } from '../service/clips.service'
import { CreateClipDto } from '../dto/create-clip.dto'
import { UpdateClipDto } from '../dto/update-clip.dto'
import { Clips } from '../schemas/clips.schemas'

@Controller('clips')
export class ClipsController {
  constructor(private readonly clipsService: ClipsService) {}

  @Post()
  async create(@Body() createClipDto: CreateClipDto, @Res() res) {
    try {
      const clips = await this.clipsService.create(createClipDto)
      res.status(201).json({ message: 'El clip ha sido guardado!!', clips })
      return
    } catch (err: any) {
      res.status(err.status).json(err.message)
      return
    }
  }

  @Get()
  async findAll(@Res() res): Promise<Clips[]> {
    try {
      const clips = await this.clipsService.findAll()
      res.status(200).json(clips)
      return
    } catch (err: any) {
      res.status(err.status).json(err.response)
      return
    }
  }

  @Get(':id')
  findOne(@Param('id') _id: string, @Res() res) {
    try {
      const clipsforID = this.clipsService.findOne(_id)
      res.status(200).json(clipsforID)
      return
    } catch (err: any) {
      res.status(err.status).json(err.response)
    }
  }

  @Patch(':id')
  update(
    @Param('id') _id: string,
    @Body() updateClipDto: UpdateClipDto,
    @Res() res
  ) {
    try {
      const clips = this.clipsService.update(_id, updateClipDto)
      res.status(200).json(clips)
      return
    } catch (error: any) {
      res.status(error.status).json(error.response)
    }
  }

  @Delete(':id')
  remove(@Param('id') _id: string, @Res() res) {
    try {
      const clips = this.clipsService.remove(_id)
      res.status(200).json({ message: 'Clip eliminado correctamente!', clips })
      return
    } catch (error: any) {
      res.status(error.status).json(error.response)
    }
  }
}
