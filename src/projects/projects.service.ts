import { Injectable, NotFoundException } from '@nestjs/common';
import { ProjectStatus } from './project-status.enum';
import { CreateProjectDto } from './dto/create-project.dto';
import { GetProjectsFilterDto } from './dto/get-projects-filter.dto';
import { ProjectsRepository } from './projects.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './project.entity';
@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectsRepository)
    private projectsRepository: ProjectsRepository,
  ) {}
  async getProjectById(id: string): Promise<Project> {
    const found = await this.projectsRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Project with ID "${id}" not found`);
    }

    return found;
  }
  createProject(createProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectsRepository.createProject(createProjectDto);
  }
}
