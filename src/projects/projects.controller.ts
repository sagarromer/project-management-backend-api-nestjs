import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './project.model';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get()
  getAllProjects(): Project[] {
    return this.projectsService.getAllProjects();
  }
}
