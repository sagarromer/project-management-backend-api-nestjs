import { Injectable } from '@nestjs/common';
import { Project } from './project.model';

@Injectable()
export class ProjectsService {
  private projects: Project[] = [];

  getAllProjects(): Project[] {
    return this.projects;
  }
}
