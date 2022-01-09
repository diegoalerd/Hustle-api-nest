import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeService } from './aplications/employee.service';
import { EmployeeController } from './Infrastructure/employee.controller';
import { employeeAddressRepository } from './Infrastructure/outter/persistence/repository/employeeAddressRepository';
import { employeeCourseRepository } from './Infrastructure/outter/persistence/repository/employeeCourseRepository';
import { employeeReferencesRepository } from './Infrastructure/outter/persistence/repository/employeeRefencesRepository';
import { employeeRepository } from './Infrastructure/outter/persistence/repository/employeeRepository';
import { employeeSkillRepository } from './Infrastructure/outter/persistence/repository/employeeSkillRepository';
import { employeeWorkExperienceRepository } from './Infrastructure/outter/persistence/repository/employeeWorkExperienceRepository';

@Module({
    imports:[TypeOrmModule.forFeature([employeeRepository,employeeAddressRepository,
      employeeReferencesRepository,employeeWorkExperienceRepository,employeeSkillRepository,
    employeeCourseRepository])], 
    providers: [EmployeeService],
    controllers: [EmployeeController],
  })
export class EmployeeModule {}
