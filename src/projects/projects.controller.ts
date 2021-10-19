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
import { Project, ProjectStatus } from './project.model';
import { GetProjectsFilterDto } from './dto/get-projects-filter.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get()
  getProjects(@Query() filterDto: GetProjectsFilterDto): Project[] {
    if (Object.keys(filterDto).length) {
      return this.projectsService.getProjectsWithFilters(filterDto);
    } else {
      return this.projectsService.getAllProjects();
    }
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
    @Body('status') updateProjectStatusDto: UpdateProjectStatusDto,
  ): Project {
    const { status } = updateProjectStatusDto;
    return this.projectsService.updateProjectStatus(id, status);
  }
}
