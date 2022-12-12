import { StudentEntity } from './entities/student.entity';

export class StudentCriteria {
  firstname?: string;
  lastname?: string;
  patronymic?: string;
  course?: number;
  group?: number;
  direction?: number;
  status?: number;
}

export class FindStudentResult {
  constructor(public students: StudentEntity[], public count: number) {}
}
