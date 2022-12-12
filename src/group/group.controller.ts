import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { RemoveGroupDto } from './dto/remove-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { GroupEntity } from './entities/group.entity';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  create(@Body() createGroupDto: CreateGroupDto): Promise<GroupEntity> {
    return this.groupService.create(createGroupDto);
  }

  @Get()
  read(): Promise<GroupEntity[]> {
    return this.groupService.read();
  }

  @Put()
  update(@Body() updateGroupDto: UpdateGroupDto): Promise<void> {
    return this.groupService.update(updateGroupDto);
  }

  @Delete()
  remove(@Body() removeGroupDto: RemoveGroupDto): Promise<void> {
    return this.groupService.remove(removeGroupDto);
  }
}
