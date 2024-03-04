import { Document } from 'mongoose';

export interface IClips extends Document {
  readonly _id: string;
  readonly title: string;
  readonly description: string;
  readonly tags: string[];
  readonly embedurl: string;
}
