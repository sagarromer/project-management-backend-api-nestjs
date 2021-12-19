import { EntityRepository, Repository } from 'typeorm';
import { Project } from './project.entity';

@EntityRepository(Project)
export class ProjectsRepository extends Repository<Project> {}
