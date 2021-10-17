import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectsService } from './projects.service';
import { Project, ProjectStatus } from './project.model';

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
  deleteProject(@Param('id') id: string): void {
    return this.projectsService.deleteProject(id);
  }
  @Patch('/:id/status')
  updateProjectStatus(
    @Param('id') id: string,
    @Body('status') status: ProjectStatus,
  ): Project {
    return this.projectsService.updateProjectStatus(id, status);
  }
}
