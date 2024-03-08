import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
export type UsersDocument = HydratedDocument<Users>
@Schema({ versionKey: false, timestamps: { createdAt: true, updatedAt: true } })
export class Users {
  @Prop({ unique: true })
  username: string
  @Prop()
  password: string
}
export const UsersSchema = SchemaFactory.createForClass(Users)
