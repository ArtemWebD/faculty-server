import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { GroupModule } from './group/group.module';
import { StatusModule } from './status/status.module';
import { DirectionModule } from './direction/direction.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    StudentModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: configService.get<'postgres'>('DATABASE_TYPE'),
        url: configService.get<string>('DATABASE_URL'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    GroupModule,
    StatusModule,
    DirectionModule,
  ],
})
export class AppModule {}
