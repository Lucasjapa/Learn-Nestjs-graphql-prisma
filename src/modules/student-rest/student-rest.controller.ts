import { Controller } from '@nestjs/common';
import { StudentRestService } from './student-rest.service';

@Controller('student-rest')
export class StudentRestController {
  constructor(private readonly studentRestService: StudentRestService) {}
}
