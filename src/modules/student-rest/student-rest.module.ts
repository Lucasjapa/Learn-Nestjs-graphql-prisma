import { Module } from '@nestjs/common';
import { StudentRestService } from './student-rest.service';
import { StudentRestController } from './student-rest.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [StudentRestController],
  providers: [StudentRestService, PrismaService,],
})
export class StudentRestModule {}
