import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { GroupEntity } from './entities/group.entity';

@Injectable()
export class GroupRepository {
  constructor(
    @InjectRepository(GroupEntity)
    private readonly repository: Repository<GroupEntity>,
  ) {}

  create(title: string): Promise<GroupEntity> {
    return this.repository.save({ title });
  }

  read(): Promise<GroupEntity[]> {
    return this.repository.find();
  }

  update(
    id: number,
    partialEntity: QueryDeepPartialEntity<GroupEntity>,
  ): Promise<UpdateResult> {
    return this.repository.update(id, partialEntity);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
