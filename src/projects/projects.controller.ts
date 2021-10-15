import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
  @Get('/:id')
  getProjectById(@Param('id') id: string): Project {
    return this.projectsService.getProjectById(id);
  }
  @Post()
  createProject(@Body() createProjectDto: CreateProjectDto): Project {
    return this.projectsService.createProject(createProjectDto);
  }
  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    return this.projectsService.deleteTask(id);
  }
}
