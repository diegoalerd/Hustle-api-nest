import { Module } from '@nestjs/common';
import { EmployerService } from './aplications/employer.service';
import { EmployerController } from './infrastructure/employer.controller';

@Module({
  providers: [EmployerService],
  controllers: [EmployerController]
})
export class EmployerEModule {}
