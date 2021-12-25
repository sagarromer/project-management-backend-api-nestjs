import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectsService } from './projects.service';
import { UpdateProjectStatusDto } from './dto/update-project-status.dto';
import { ProjectStatus } from './project-status.enum';
import { Project } from './project.entity';
import { GetProjectsFilterDto } from './dto/get-projects-filter.dto';
import { Logger } from '@nestjs/common';

@Controller('projects')
@UseGuards(AuthGuard())
export class ProjectsController {
  private logger = new Logger('ProjectsController');

  constructor(private projectsService: ProjectsService) {}
  @Get()
  getProjects(
    @Query() filterDto: GetProjectsFilterDto,
    @GetUser() user: User,
  ): Promise<Project[]> {
    this.logger.verbose(
      `User "${
        user.username
      }" retrieving all projects. Filters: ${JSON.stringify(filterDto)}`,
    );
    return this.projectsService.getProjects(filterDto, user);
  }
  @Get('/:id')
  getProjectById(
    @Param('id') id: string,
    @GetUser() user: User,
  ): Promise<Project> {
    return this.projectsService.getProjectById(id, user);
  }
  @Post()
  createProject(
    @Body() createProjectDto: CreateProjectDto,
    @GetUser() user: User,
  ): Promise<Project> {
    this.logger.verbose(
      `User "${user.username}" creating a new project. Data: ${JSON.stringify(
        createProjectDto,
      )}`,
    );
    return this.projectsService.createProject(createProjectDto, user);
  }
  @Delete('/:id')
  deleteProject(@Param('id') id: string, @GetUser() user: User): Promise<void> {
    return this.projectsService.deleteProject(id, user);
  }
  @Patch('/:id/status')
  updateProjectStatus(
    @Param('id') id: string,
    @Body() updateProjectStatusDto: UpdateProjectStatusDto,
    @GetUser() user: User,
  ): Promise<Project> {
    const { status } = updateProjectStatusDto;
    return this.projectsService.updateProjectStatus(id, status, user);
  }
}
