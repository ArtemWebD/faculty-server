import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { ReadStudentDto } from './dto/read-student.dto';
import { RemoveStudentDto } from './dto/remove-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentEntity } from './entities/student.entity';
import { StudentRepository } from './student.repository';
import { FindStudentResult } from './student.type';

@Injectable()
export class StudentService {
  constructor(private readonly studentRepository: StudentRepository) {}

  create(createStudentDto: CreateStudentDto): Promise<StudentEntity> {
    return this.studentRepository.create(createStudentDto);
  }

  async read(readStudentDto: ReadStudentDto): Promise<FindStudentResult> {
    const { take, page, ...criteria } = readStudentDto;
    const students = await this.studentRepository.read(take, page, criteria);
    const count = await this.studentRepository.count();

    return new FindStudentResult(students, count);
  }

  update(updateStudentDto: UpdateStudentDto): Promise<StudentEntity[]> {
    const { id, ...partialEntity } = updateStudentDto;

    return this.studentRepository.update(id, {
      ...partialEntity,
      ...(partialEntity.group && { group: { id: partialEntity.group } }),
      ...(partialEntity.direction && {
        direction: { id: partialEntity.direction },
      }),
      ...(partialEntity.status && { status: { id: partialEntity.status } }),
    });
  }

  async remove(removeStudentDto: RemoveStudentDto): Promise<void> {
    await this.studentRepository.remove(removeStudentDto.id);
  }
}
