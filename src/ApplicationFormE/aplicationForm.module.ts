import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationFormService } from './Aplications/applicationForm.service';
import { ApplicationFormController } from './infrastructure/applicationForm.controller';
import { applicationFormRepository } from './infrastructure/outter/persistence/repository/applicationFormRepository';

@Module({
  imports:[TypeOrmModule.forFeature([applicationFormRepository])], 
  controllers: [ApplicationFormController],
  providers: [ApplicationFormService]
})
export class ApplicationFormModule {}