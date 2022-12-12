import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirectionController } from './direction.controller';
import { DirectionRepository } from './direction.repository';
import { DirectionService } from './direction.service';
import { DirectionEntity } from './entities/direction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DirectionEntity])],
  controllers: [DirectionController],
  providers: [DirectionService, DirectionRepository],
})
export class DirectionModule {}
