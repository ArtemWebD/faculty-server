import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusEntity } from './entities/status.entity';
import { StatusController } from './status.controller';
import { StatusRepository } from './status.repository';
import { StatusService } from './status.service';

@Module({
  imports: [TypeOrmModule.forFeature([StatusEntity])],
  controllers: [StatusController],
  providers: [StatusService, StatusRepository],
})
export class StatusModule {}
