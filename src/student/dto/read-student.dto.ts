import { StudentCriteria } from '../student.type';

export class ReadStudentDto extends StudentCriteria {
  take: number;
  page: number;
}
