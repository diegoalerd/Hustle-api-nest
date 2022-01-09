import { Body, Controller, Post, Get, Put, Param, Delete} from '@nestjs/common';
import { jobOfferService } from '../Aplications/jobOfferE.service';
import { commandJobOffer } from '../Aplications/In/command/commandJobOffer';
import { Observable } from 'rxjs';                                                 

@Controller('jobOffer')
export class jobOfferController {
    constructor(private jobOfferService: jobOfferService){}
    
    //Crear 
    @Post()
    create(@Body() jobOffer:commandJobOffer): Promise<any> {
    return this.jobOfferService.createPost(jobOffer);
    }

    //Buscar
    @Get()
    findAll(): Promise<any[]>{
        return this.jobOfferService.findAllPost() 
    } 

    @Get(':id')
    findDetail( @Param('id') id: number): Promise<any[]>{
        return this.jobOfferService.findDetailjobOffer(id) 
    } 

/*
    //Actualizar
    @Put(':id')
    update(
        @Param('id') id:number,
        @Body() jobOffer: jobOffer,
    ): Observable<UpdateResult> {
        return this.jobOfferService.updatePost(id, jobOffer); 
    }

    //Borrar
    @Delete(':id')
    deleted(@Param('id') id: number): Observable<DeleteResult>{
        return this.jobOfferService.deletePost(id);
    }*/
}