import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'DesignEase API is running on port 3001';
  }

  @Get('health')
  getHealth(): { status: string } {
    return { status: 'ok' };
  }
}
