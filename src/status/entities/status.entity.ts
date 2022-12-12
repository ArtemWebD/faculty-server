import { StudentEntity } from 'src/student/entities/student.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('status')
export class StatusEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => StudentEntity, (student) => student.status, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  students: StudentEntity[];
}
