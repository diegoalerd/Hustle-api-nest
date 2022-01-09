import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { commandEmployeeModel } from 'src/EmployeeE/aplications/in/comandemployee';
import { commandJobOffer } from 'src/JobOfferE/Aplications/In/command/commandJobOffer';
import { ApplicationFormService } from '../Aplications/applicationForm.service';
import { commandApplicationFormModel } from '../Aplications/in/commandapplicationForm';
import { applicationFormModel } from '../domain/applicationFormEntity.model';

@Controller('applicationform')
export class ApplicationFormController {
    constructor(private ApplicationFormService: ApplicationFormService){}

    @Post()
    PostApplication(@Body() commandApplicationForm: applicationFormModel/*,commandJobOffer: commandJobOffer, 
    commandEmployeeModel: commandEmployeeModel*/): Promise<any>{
      return this.ApplicationFormService.createApplicationForm(commandApplicationForm,/*commandJobOffer,commandEmployeeModel*/) 
    } 

    @Put(':idput')
    updateOneEmployee(@Param('idput') idput: number): Promise<any>{
      console.log(idput)
      return this.ApplicationFormService.updateAcceptedApplicationForm(idput) 
    } 

    @Get(':id')
    findAllEmployeeApplication(@Param('id') id: number): Promise<any[]>{
        return this.ApplicationFormService.findAllEmployeeApplication(id) 
    } 

}