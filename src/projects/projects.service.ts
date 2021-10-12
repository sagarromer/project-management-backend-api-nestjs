import { Injectable } from '@nestjs/common';
import { Project, ProjectStatus } from './project.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProjectsService {
  private projects: Project[] = [];

  getAllProjects(): Project[] {
    return this.projects;
  }

  createProject(title: string, description: string): Project {
    const project: Project = {
      id: uuid(),
      title,
      description,
      status: ProjectStatus.OPEN,
    };
    this.projects.push(project);
    return project;
  }
}
