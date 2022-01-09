import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { address } from 'src/EmployeeE/aplications/in/comandAddress';
import { commandEmployeeModel } from 'src/EmployeeE/aplications/in/comandemployee';
import { EmployeeModel } from 'src/EmployeeE/domain/EmployeeEntity.model';
import { commandJobOffer } from 'src/JobOfferE/Aplications/In/command/commandJobOffer';
import { applicationFormModel } from '../domain/applicationFormEntity.model';
import { applicationFormRepository } from '../infrastructure/outter/persistence/repository/applicationFormRepository';
import { commandApplicationFormModel } from './in/commandapplicationForm';

@Injectable()
export class ApplicationFormService {
    
    constructor (
        @InjectRepository(applicationFormRepository)
        private readonly appplicationFormOut: applicationFormRepository,
    ){}

    async createApplicationForm(commandApplicationForm: applicationFormModel,/*commandJobOffer: commandJobOffer, 
        commandEmployeeModel: commandEmployeeModel*/): Promise<any>{

        const applicationForm = new applicationFormModel(     
            commandApplicationForm.id_applicationform,
            commandApplicationForm.sentdate,
            commandApplicationForm.status
        )

        const employeeAddress = new address(     
            commandApplicationForm.employee.address.id_address,
            commandApplicationForm.employee.address.street1,
            commandApplicationForm.employee.address.street2,
            commandApplicationForm.employee.address.city,
            commandApplicationForm.employee.address.state,
            commandApplicationForm.employee.address.zip,
        )

        const employeeDI = new EmployeeModel(
            commandApplicationForm.employee.id_employee,
            commandApplicationForm.employee.firstName,
            commandApplicationForm.employee.middleName,
            commandApplicationForm.employee.lastName,
            commandApplicationForm.employee.phoneNumber,
            commandApplicationForm.employee.dateOfBirth,
            commandApplicationForm.employee.ssn,
            commandApplicationForm.employee.educationLevel,
            commandApplicationForm.employee.rating,
            commandApplicationForm.employee.status,
        )  

        const jobOfferDI = new commandJobOffer(
            commandApplicationForm.jobOffer.id,
            commandApplicationForm.jobOffer.title,
            commandApplicationForm.jobOffer.deadline,
            commandApplicationForm.jobOffer.specialRequeriments,
            commandApplicationForm.jobOffer.duration,
            //commandApplicationForm.jobOffer.hourlyRate, // no agarra porque no esta en el constructor, por ahora 
            commandApplicationForm.jobOffer.status,       // no pasa nada, debido al cqrs, ya veremos si implementamos
        )

        await this.appplicationFormOut.saveApplicationForm(applicationForm,jobOfferDI,employeeDI)

    }

    updateAcceptedApplicationForm(id: number): Promise<any> {
        console.log(id)
        return this.appplicationFormOut.putAcceptedApplicationForm(id)
      }

      findAllEmployeeApplication(id_req: number): Promise<any[]> {
        return this.appplicationFormOut.findApplicationEmployee(id_req)
    }

    
}