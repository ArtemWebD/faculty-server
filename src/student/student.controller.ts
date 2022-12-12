import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { ReadStudentDto } from './dto/read-student.dto';
import { RemoveStudentDto } from './dto/remove-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentEntity } from './entities/student.entity';
import { StudentService } from './student.service';
import { FindStudentResult } from './student.type';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto): Promise<StudentEntity> {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  read(@Query() readStudentDto: ReadStudentDto): Promise<FindStudentResult> {
    return this.studentService.read(readStudentDto);
  }

  @Put()
  update(@Body() updateStudentDto: UpdateStudentDto): Promise<StudentEntity[]> {
    return this.studentService.update(updateStudentDto);
  }

  @Delete()
  remove(@Body() removeStudentDto: RemoveStudentDto): Promise<void> {
    return this.studentService.remove(removeStudentDto);
  }
}
