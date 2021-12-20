import { Injectable, NotFoundException } from '@nestjs/common';
import { ProjectStatus } from './project-status.enum';
import { CreateProjectDto } from './dto/create-project.dto';
import { GetProjectsFilterDto } from './dto/get-projects-filter.dto';

@Injectable()
export class ProjectsService {
  // private projects: Project[] = [];
  // getAllProjects(): Project[] {
  //   return this.projects;
  // }
  // getProjectById(id: string): Project {
  //   const found = this.projects.find((project) => project.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Project with ID "${id}" not found`);
  //   }
  //   return found;
  // }
  // createProject(createProjectDto: CreateProjectDto): Project {
  //   const { title, description } = createProjectDto;
  //   const project: Project = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: ProjectStatus.OPEN,
  //   };
  //   this.projects.push(project);
  //   return project;
  // }
  // deleteProject(id: string): void {
  //   const found = this.getProjectById(id);
  //   this.projects = this.projects.filter((project) => project.id !== found.id);
  // }
  // updateProjectStatus(id: string, status: ProjectStatus) {
  //   const project = this.getProjectById(id);
  //   project.status = status;
  //   return project;
  // }
  // getProjectsWithFilters(filterDto: GetProjectsFilterDto): Project[] {
  //   const { status, search } = filterDto;
  //   let projects = this.getAllProjects();
  //   // do something with status
  //   if (status) {
  //     projects = projects.filter((project) => project.status === status);
  //   }
  //   if (search) {
  //     projects = projects.filter((project) => {
  //       if (
  //         project.title.includes(search) ||
  //         project.description.includes(search)
  //       ) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  //   return projects;
  // }
}
