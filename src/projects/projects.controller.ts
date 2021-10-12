import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
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
  createProject(@Body() createProjectDto: CreateProjectDto): Project {
    return this.projectsService.createProject(createProjectDto);
  }
}
