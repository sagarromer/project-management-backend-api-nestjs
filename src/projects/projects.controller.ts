import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './project.model';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get()
  getAllProjects(): Project[] {
    return this.projectsService.getAllProjects();
  }
  @Post()
  createProject(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Project {
    return this.projectsService.createProject(title, description);
  }
}
