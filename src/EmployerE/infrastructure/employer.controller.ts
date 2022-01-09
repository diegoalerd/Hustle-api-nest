import { Body, Controller, Post } from '@nestjs/common';
import { EmployerService } from '../aplications/employer.service';

@Controller('employer')
export class EmployerController {
    constructor(private employerService: EmployerService){}
        //Buscar
/*
        @Post()
        async create(@Body() employer: employerEntity): Promise<any> {
        return await this.employerService.createEmployer(employer)
        }
*/
}
