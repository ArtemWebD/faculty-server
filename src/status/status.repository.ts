import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { StatusEntity } from './entities/status.entity';

@Injectable()
export class StatusRepository {
  constructor(
    @InjectRepository(StatusEntity)
    private readonly repository: Repository<StatusEntity>,
  ) {}

  create(title: string): Promise<StatusEntity> {
    return this.repository.save({ title });
  }

  read(): Promise<StatusEntity[]> {
    return this.repository.find();
  }

  update(
    id: number,
    partialEntity: QueryDeepPartialEntity<StatusEntity>,
  ): Promise<UpdateResult> {
    return this.repository.update(id, partialEntity);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
