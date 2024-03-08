import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateClipDto } from '../dto/create-clip.dto'
import { UpdateClipDto } from '../dto/update-clip.dto'
import { IClips } from '../interface/clips.interface'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class ClipsService {
  constructor(@InjectModel('Clips') private clipsModel: Model<IClips>) {}
  async create(createClipDto: CreateClipDto): Promise<IClips> {
    const clips = await new this.clipsModel(createClipDto)
    return clips.save()
  }

  async findAll(): Promise<IClips[]> {
    const clipsData = await this.clipsModel.find()
    if (!clipsData || clipsData.length === 0) {
      throw new NotFoundException('No exite Clips actualmente')
    }
    return clipsData
  }

  async findOne(_id: string): Promise<IClips> {
    const clipData = await this.clipsModel.findOne({ _id }).exec()
    if (!clipData) {
      throw new NotFoundException(`No se pudo encontrar el clip con id ${_id}`)
    }
    return clipData
  }

  async update(_id: string, updateClipDto: UpdateClipDto): Promise<IClips> {
    const clips = await this.clipsModel.findByIdAndUpdate(_id, updateClipDto, {
      new: true
    })
    return clips
  }

  async remove(_id: string): Promise<IClips> {
    const deletedClips = await this.clipsModel.findByIdAndDelete(_id)
    if (!deletedClips) throw new NotFoundException(`Clip #${_id} no encontrado`)
    return deletedClips
  }
}
