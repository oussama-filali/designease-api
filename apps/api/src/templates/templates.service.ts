import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TemplatesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.template.findMany({
      where: { status: 'PUBLISHED' },
      include: { category: true },
    });
  }

  async findOne(slug: string) {
    return this.prisma.template.findUnique({
      where: { slug },
      include: { category: true },
    });
  }
}
