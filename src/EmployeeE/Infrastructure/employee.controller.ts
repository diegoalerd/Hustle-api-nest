import { Controller } from '@nestjs/common';
import { Body, Post, Get, Put, Param, Delete} from '@nestjs/common';
import { Observable } from 'rxjs';                                                 
import { EmployeeService } from '../aplications/employee.service';
import { commandEmployeeModel } from '../aplications/in/comandEmployee';



@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService){}

    //Crear 
    @Post()
    async create(@Body() employee:commandEmployeeModel): Promise<any> {
    return await this.employeeService.createEmployee(employee)
    }
    
}
    
    