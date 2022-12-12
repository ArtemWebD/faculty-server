import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { RemoveGroupDto } from './dto/remove-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { GroupEntity } from './entities/group.entity';
import { GroupRepository } from './group.repository';

@Injectable()
export class GroupService {
  constructor(private readonly groupRepository: GroupRepository) {}

  create(createGroupDto: CreateGroupDto): Promise<GroupEntity> {
    return this.groupRepository.create(createGroupDto.title);
  }

  read(): Promise<GroupEntity[]> {
    return this.groupRepository.read();
  }

  async update(updateGroupDto: UpdateGroupDto): Promise<void> {
    const { id, title } = updateGroupDto;

    await this.groupRepository.update(id, { title });
  }

  async remove(removeGroupDto: RemoveGroupDto): Promise<void> {
    await this.groupRepository.remove(removeGroupDto.id);
  }
}
