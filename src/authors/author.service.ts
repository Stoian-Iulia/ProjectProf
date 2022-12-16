import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';

@Injectable()
export class AuthorService {
  async create(dto: CreateAuthorDto) {}
}
