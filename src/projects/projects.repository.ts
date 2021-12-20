import { EntityRepository, Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectStatus } from './project-status.enum';
import { Project } from './project.entity';

@EntityRepository(Project)
export class ProjectsRepository extends Repository<Project> {
  async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
    const { title, description } = createProjectDto;

    const project = this.create({
      title,
      description,
      status: ProjectStatus.OPEN,
    });

    await this.save(project);
    return project;
  }
}
