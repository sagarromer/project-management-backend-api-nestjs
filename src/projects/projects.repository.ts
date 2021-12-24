import { EntityRepository, Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { GetProjectsFilterDto } from './dto/get-projects-filter.dto';
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
  async getProjects(filterDto: GetProjectsFilterDto): Promise<Project[]> {
    const { status, search } = filterDto;

    const query = this.createQueryBuilder('project');

    if (status) {
      query.andWhere('project.status = :status', { status });
    }

    if (search) {
      query.andWhere(
        'LOWER(project.title) LIKE LOWER(:search) OR LOWER(project.description) LIKE LOWER(:search)',
        { search: `%${search}%` },
      );
    }

    const projects = await query.getMany();
    return projects;
  }
}
