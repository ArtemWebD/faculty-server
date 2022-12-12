import { StudentCriteria } from '../student.type';

export class UpdateStudentDto extends StudentCriteria {
  id: number[];
}
