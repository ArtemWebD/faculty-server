import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { RemoveStatusDto } from './dto/remove-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { StatusEntity } from './entities/status.entity';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Post()
  create(@Body() createStatusDto: CreateStatusDto): Promise<StatusEntity> {
    return this.statusService.create(createStatusDto);
  }

  @Get()
  read(): Promise<StatusEntity[]> {
    return this.statusService.read();
  }

  @Put()
  update(@Body() updateStatusDto: UpdateStatusDto): Promise<void> {
    return this.statusService.update(updateStatusDto);
  }

  @Delete()
  remove(@Body() removeStatusDto: RemoveStatusDto): Promise<void> {
    return this.statusService.remove(removeStatusDto);
  }
}
