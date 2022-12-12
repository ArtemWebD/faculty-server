import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { RemoveStatusDto } from './dto/remove-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { StatusEntity } from './entities/status.entity';
import { StatusRepository } from './status.repository';

@Injectable()
export class StatusService {
  constructor(private readonly statusRepository: StatusRepository) {}

  create(createStatusDto: CreateStatusDto): Promise<StatusEntity> {
    return this.statusRepository.create(createStatusDto.title);
  }

  read(): Promise<StatusEntity[]> {
    return this.statusRepository.read();
  }

  async update(updateStatusDto: UpdateStatusDto): Promise<void> {
    const { id, title } = updateStatusDto;

    await this.statusRepository.update(id, { title });
  }

  async remove(removeStatusDto: RemoveStatusDto): Promise<void> {
    await this.statusRepository.remove(removeStatusDto.id);
  }
}
