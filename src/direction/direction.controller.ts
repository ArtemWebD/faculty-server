import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { DirectionService } from './direction.service';
import { CreateDirectionDto } from './dto/create-direction.dto';
import { RemoveDirectionDto } from './dto/remove-direction.dto';
import { UpdateDirectionDto } from './dto/update-direction.dto';
import { DirectionEntity } from './entities/direction.entity';

@Controller('direction')
export class DirectionController {
  constructor(private readonly directionService: DirectionService) {}

  @Post()
  create(
    @Body() createDirectionDto: CreateDirectionDto,
  ): Promise<DirectionEntity> {
    return this.directionService.create(createDirectionDto);
  }

  @Get()
  read(): Promise<DirectionEntity[]> {
    return this.directionService.read();
  }

  @Put()
  update(@Body() updateDirectionDto: UpdateDirectionDto): Promise<void> {
    return this.directionService.update(updateDirectionDto);
  }

  @Delete()
  remove(@Body() removeDirectionDto: RemoveDirectionDto): Promise<void> {
    return this.directionService.remove(removeDirectionDto);
  }
}
