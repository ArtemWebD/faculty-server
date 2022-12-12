import { DirectionEntity } from 'src/direction/entities/direction.entity';
import { GroupEntity } from 'src/group/entities/group.entity';
import { StatusEntity } from 'src/status/entities/status.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('student')
export class StudentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  patronymic: string;

  @Column()
  course: number;

  @ManyToOne(() => GroupEntity, (group) => group.students, {
    nullable: false,
  })
  group: GroupEntity;

  @ManyToOne(() => StatusEntity, (status) => status.students, {
    nullable: true,
  })
  status: StatusEntity;

  @ManyToOne(() => DirectionEntity, (status) => status.students, {
    nullable: false,
  })
  direction: DirectionEntity;
}
