import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectStatus } from './project.model';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: ProjectStatus;
}
