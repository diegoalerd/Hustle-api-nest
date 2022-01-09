import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule, TypeOrmModuleOptions} from '@nestjs/typeorm'
import {ConfigModule, ConfigService} from '@nestjs/config';
import { createjobofferModule } from './JobOfferE/jobOffer.module'
import { EmployeeModule } from './EmployeeE/employee.module';
import { config } from 'rxjs';
import { JoinColumn } from 'typeorm';
//import { TYPEORM_CONFIG } from './config/constanst';
import { Joi } from '@hapi/joi'
import { jobOfferEntity } from './JobOfferE/infrastructure/outter/persistence/Entity/jobOfferEntity';
import { employeeEntity2 } from './EmployeeE/Infrastructure/outter/persistence/entity/employeeEntity';
import { employeeAddressEntity } from './EmployeeE/Infrastructure/outter/persistence/entity/addressEntity';
import { employeeReferencesEntity } from './EmployeeE/Infrastructure/outter/persistence/entity/referencesEntity';
import { employeeWorkExperienceEntity } from './EmployeeE/Infrastructure/outter/persistence/entity/workExperienceEntity';
import { skillEntity } from './EmployeeE/Infrastructure/outter/persistence/entity/skillEntity';
import { courseEntity } from './EmployeeE/Infrastructure/outter/persistence/entity/courseEntity';
//import databaseConfig from './config/database.config';
/*
@Module({
  imports: [ createjobofferModule, 
    EmployeeModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>
        config.get<TypeOrmModuleOptions>(TYPEORM_CONFIG),
    }),
    
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('developmen'),
      })
     
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

  //return connectionOptions;

export class AppModule {}
/*
*/
@Module({
  imports: [ createjobofferModule, 
    EmployeeModule, 
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      
      
      /*url:'postgres://xiuljeqflocjgb:027d3313928abdc34e74815ce04ec557596181c90092daf40b9084f70e48c944@ec2-3-230-38-145.compute-1.amazonaws.com:5432/d1o42isjdc4bgh',
      type:'postgres',*/
      name:'default',
      type:'postgres',
      host:'ec2-3-230-38-145.compute-1.amazonaws.com',
      port: 5432,
      username:'xiuljeqflocjgb',
      password:'027d3313928abdc34e74815ce04ec557596181c90092daf40b9084f70e48c944',
      database:'d1o42isjdc4bgh',


        //entities: [__dirname + '/../**/*.entity.{js,ts}'],

        entities: [jobOfferEntity, employeeEntity2, employeeAddressEntity, employeeReferencesEntity, employeeWorkExperienceEntity, skillEntity, courseEntity],

        migrations: ['dist/**/*.entity.ts'],
        /*type: 'postgres',
        host: process.env.POSTGRESS_HOST,
        port: parseInt(<string>process.env.POSTGRESS_PORT),
        username: process.env.POSTGRESS_USER,
        password: process.env.POSTGRESS_PASSWORD,
        database: process.env.POSTGRESS_DATABASE,*/
        synchronize:true,
        logging: false,
        dropSchema:false,
        migrationsRun: true,
        ssl:true,
        extra:{
          ssl:{
            rejectUnauthorized: false,
          },
        },
      }),
    ],
    controllers: [AppController],
    providers: [AppService],
  })
  export class AppModule {}
  
  
