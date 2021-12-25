import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from 'src/projects/project.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany((_type) => Project, (project) => project.user, { eager: true })
  projects: Project[];
}
