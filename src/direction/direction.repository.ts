import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { DirectionEntity } from './entities/direction.entity';

@Injectable()
export class DirectionRepository {
  constructor(
    @InjectRepository(DirectionEntity)
    private readonly repository: Repository<DirectionEntity>,
  ) {}

  create(title: string): Promise<DirectionEntity> {
    return this.repository.save({ title });
  }

  read(): Promise<DirectionEntity[]> {
    return this.repository.find();
  }

  update(
    id: number,
    partialEntity: QueryDeepPartialEntity<DirectionEntity>,
  ): Promise<UpdateResult> {
    return this.repository.update(id, partialEntity);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
