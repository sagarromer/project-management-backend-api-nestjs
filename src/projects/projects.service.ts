import { Injectable } from '@nestjs/common';
import { Project, ProjectStatus } from './project.model';
import { v4 as uuid } from 'uuid';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  private projects: Project[] = [];

  getAllProjects(): Project[] {
    return this.projects;
  }
  getProjectById(id: string): Project {
    return this.projects.find((project) => project.id === id);
  }
  createProject(createProjectDto: CreateProjectDto): Project {
    const { title, description } = createProjectDto;
    const project: Project = {
      id: uuid(),
      title,
      description,
      status: ProjectStatus.OPEN,
    };
    this.projects.push(project);
    return project;
  }
  deleteProject(id: string): void {
    this.projects = this.projects.filter((project) => project.id !== id);
  }
}
