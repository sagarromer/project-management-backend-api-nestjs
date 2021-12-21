import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectsService } from './projects.service';
import { UpdateProjectStatusDto } from './dto/update-project-status.dto';
import { ProjectStatus } from './project-status.enum';
import { Project } from './project.entity';
import { GetProjectsFilterDto } from './dto/get-projects-filter.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get('/:id')
  getProjectById(@Param('id') id: string): Promise<Project> {
    return this.projectsService.getProjectById(id);
  }
  @Post()
  createProject(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectsService.createProject(createProjectDto);
  }
  @Delete('/:id')
  deleteProject(@Param('id') id: string): Promise<void> {
    return this.projectsService.deleteProject(id);
  }
  @Patch('/:id/status')
  updateProjectStatus(
    @Param('id') id: string,
    @Body() updateProjectStatusDto: UpdateProjectStatusDto,
  ): Promise<Project> {
    const { status } = updateProjectStatusDto;
    return this.projectsService.updateProjectStatus(id, status);
  }
}
