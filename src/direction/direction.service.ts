import { Injectable } from '@nestjs/common';
import { DirectionRepository } from './direction.repository';
import { CreateDirectionDto } from './dto/create-direction.dto';
import { RemoveDirectionDto } from './dto/remove-direction.dto';
import { UpdateDirectionDto } from './dto/update-direction.dto';
import { DirectionEntity } from './entities/direction.entity';

@Injectable()
export class DirectionService {
  constructor(private readonly directionRepository: DirectionRepository) {}

  create(createDirectionDto: CreateDirectionDto): Promise<DirectionEntity> {
    return this.directionRepository.create(createDirectionDto.title);
  }

  read(): Promise<DirectionEntity[]> {
    return this.directionRepository.read();
  }

  async update(updateDirectionDto: UpdateDirectionDto): Promise<void> {
    const { id, title } = updateDirectionDto;

    await this.directionRepository.update(id, { title });
  }

  async remove(removeDirectionDto: RemoveDirectionDto): Promise<void> {
    await this.directionRepository.remove(removeDirectionDto.id);
  }
}
