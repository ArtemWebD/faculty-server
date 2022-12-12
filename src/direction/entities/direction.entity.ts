import { StudentEntity } from 'src/student/entities/student.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('direction')
export class DirectionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => StudentEntity, (student) => student.direction, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  students: StudentEntity[];
}
