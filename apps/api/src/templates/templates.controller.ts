import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TemplatesService } from './templates.service';

@Controller('templates')
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  @Get()
  findAll() {
    return this.templatesService.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.templatesService.findOne(slug);
  }
}
