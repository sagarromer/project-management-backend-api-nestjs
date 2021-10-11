import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  private projects = [];

  getAllProjects() {
    return this.projects;
  }
}
