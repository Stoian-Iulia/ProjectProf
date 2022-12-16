/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { AuthorService } from './author.service';

@Controller('/authors')

export class AuthorController {
  constructor(private authorService: AuthorService) {}
}
