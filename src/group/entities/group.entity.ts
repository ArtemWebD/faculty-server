import { StudentEntity } from 'src/student/entities/student.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('group')
export class GroupEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @OneToMany(() => StudentEntity, (student) => student.group, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  students: StudentEntity[];
}
