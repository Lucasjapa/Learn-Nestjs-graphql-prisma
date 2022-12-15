import { Controller } from '@nestjs/common';
import { Body, Get, Param, Post, Put } from '@nestjs/common/decorators';
import { StudentRestService } from './student-rest.service';
import { StudentDTO } from './student.dto';

@Controller('student-rest')
export class StudentRestController {
  constructor(private readonly studentRestService: StudentRestService) {}

  @Post()
  async create(@Body() data: StudentDTO) {
    return this.studentRestService.create(data);
  }

  @Get()
  async findAll(){
    return this.studentRestService.findAll();
  }

  @Put(":id")
  async updateStudent(@Param("id") id: string, @Body() data:StudentDTO) {
    return this.studentRestService.updateStudent(id, data);
  }
}
