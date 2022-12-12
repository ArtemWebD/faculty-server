export class CreateStudentDto {
  firstname: string;
  lastname: string;
  patronymic: string;
  course: number;
  group: number;
  direction: number;
  status?: number;
}
