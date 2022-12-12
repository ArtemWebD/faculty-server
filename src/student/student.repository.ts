import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, In, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentEntity } from './entities/student.entity';
import { StudentCriteria } from './student.type';

@Injectable()
export class StudentRepository {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly repository: Repository<StudentEntity>,
  ) {}

  create(body: CreateStudentDto): Promise<StudentEntity> {
    return this.repository.save({
      ...body,
      group: { id: body.group },
      direction: { id: body.direction },
      status: body.status ? { id: body.status } : undefined,
    });
  }

  read(
    take: number,
    page: number,
    criteria?: StudentCriteria,
  ): Promise<StudentEntity[]> {
    return this.repository.find({
      take,
      skip: take * page,
      where: {
        ...criteria,
        ...(criteria.firstname && {
          firstname: ILike(`%${criteria.firstname}%`),
        }),
        ...(criteria.lastname && { lastname: ILike(`%${criteria.lastname}%`) }),
        ...(criteria.patronymic && {
          patronymic: ILike(`%${criteria.patronymic}%`),
        }),
        group: { id: criteria.group },
        direction: { id: criteria.direction },
        status: { id: criteria.status },
      },
      relations: {
        group: true,
        status: true,
        direction: true,
      },
      select: {
        group: {
          id: true,
        },
        status: {
          id: true,
        },
        direction: {
          id: true,
        },
      },
    });
  }

  count(): Promise<number> {
    return this.repository.count();
  }

  async update(
    id: number[],
    partialEntity: QueryDeepPartialEntity<StudentEntity>,
  ): Promise<StudentEntity[]> {
    await this.repository.update({ id: In(id) }, partialEntity);

    return this.repository.find({
      where: { id: In(id) },
      relations: { status: true, group: true, direction: true },
      select: {
        group: {
          id: true,
        },
        status: {
          id: true,
        },
        direction: {
          id: true,
        },
      },
    });
  }

  remove(id: number[]): Promise<DeleteResult> {
    return this.repository
      .createQueryBuilder()
      .delete()
      .where({ id: In(id) })
      .execute();
  }
}
