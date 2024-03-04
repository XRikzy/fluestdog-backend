import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClipDocument = HydratedDocument<Clips>;
@Schema({ versionKey: false, timestamps: { createdAt: true, updatedAt: true } })
export class Clips {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  tags: string[];

  @Prop()
  embedurl: string;
}
export const ClipsSchema = SchemaFactory.createForClass(Clips);
