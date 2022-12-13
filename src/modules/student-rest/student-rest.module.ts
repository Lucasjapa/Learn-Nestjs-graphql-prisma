import { Module } from '@nestjs/common';
import { StudentRestService } from './student-rest.service';
import { StudentRestController } from './student-rest.controller';

@Module({
  controllers: [StudentRestController],
  providers: [StudentRestService],
})
export class StudentRestModule {}
