import { IsEnum } from 'class-validator';
import { ProjectStatus } from '../project.model';

export class UpdateProjectStatusDto {
  @IsEnum(ProjectStatus)
  status: ProjectStatus;
}
