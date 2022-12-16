import { ObjectId } from 'mongoose';

export class CreateAuthorDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly age: number;
  readonly gender: string;
  readonly birthdate: string;
  readonly authorId: ObjectId;
}
